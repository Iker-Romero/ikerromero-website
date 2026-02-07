import doetenv from 'dotenv'
import { ReactNode } from 'react'

doetenv.config()

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return children
}

export default RootLayout
