import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import { ResultProps } from '../../pages/Result/ResultTypes';

interface ResultProviderProps {
  children: ReactNode;
}
export interface ResultProviderData {
  result: ResultProps;
  setResult: Dispatch<SetStateAction<ResultProps>>;
  insertResults: (value: ResultProps) => void
}

const ResultContext = createContext<ResultProviderData>({} as ResultProviderData);

export const ResultProvider = ({ children, }: ResultProviderProps) => {

  const [result, setResult] = useState<ResultProps>({} as ResultProps)

  const insertResults = (newResults: ResultProps) => {
    setResult(newResults)
  }

  return (
    <ResultContext.Provider value={{ result, setResult, insertResults }}>
      {children}
    </ResultContext.Provider>
  )
}


export const useResult = () => useContext(ResultContext)
