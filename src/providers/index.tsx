import { ReactNode } from 'react'
import { ComissionProvider } from './comissionNotesProvider'
import { ResultProvider } from "./resultProvider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ComissionProvider>
      <ResultProvider>{children}</ResultProvider>
    </ComissionProvider>
  )
}

export default Providers
