import AuthContext from './context/AuthContext'
import ToastContainer from './context/ToastContainer'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Three Tier Security System',
  description: 'This System helps secure your data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToastContainer />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
