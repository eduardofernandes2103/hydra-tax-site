import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import { ComissionNoteProps } from '../../components/ComissionNote/ComissionNoteProps';

interface ComissionProviderProps {
  children: ReactNode
}

export interface ComissionProviderData {
  comissionNotes: ComissionNoteProps[];
  setComissionNotes: Dispatch<SetStateAction<ComissionNoteProps[]>>;
  addComission: (newNote: ComissionNoteProps) => void;
  removeComission: (id: number) => void
}

const ComissionContext = createContext<ComissionProviderData>({} as ComissionProviderData)

export const ComissionProvider = ({ children }: ComissionProviderProps) => {
  const [comissionNotes, setComissionNotes] = useState<ComissionNoteProps[]>([])

  const addComission = (newNote: ComissionNoteProps) => {
    const newNoteList: ComissionNoteProps[] = [...comissionNotes, newNote]
    setComissionNotes(newNoteList)
  }

  const removeComission = (id: number) => {
    const newNoteList = comissionNotes.filter((note) => note.id !== id);
    setComissionNotes(newNoteList)
  }

  return (
    <ComissionContext.Provider value={{ comissionNotes, setComissionNotes, addComission, removeComission }}>
      {children}
    </ComissionContext.Provider>
  )
}

export const useComission = () => useContext(ComissionContext)
