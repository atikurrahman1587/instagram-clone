import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instagram Clone',
  description: 'This is the Instagram Clone project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header/>
        {children}
        {/* Modal */}
        </body>
    </html>
  )
}
