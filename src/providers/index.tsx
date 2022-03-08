import { ReactNode } from 'react'
import { ResultProvider } from "./resultProvider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ResultProvider>{children}</ResultProvider>
  )
}

export default Providers
