import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import doetenv from 'dotenv'
import { ReactNode } from 'react'

config.autoAddCss = false

doetenv.config()

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return children
}

export default RootLayout
