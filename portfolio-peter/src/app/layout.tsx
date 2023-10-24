import './globals.css'
import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'


const inter = Pixelify_Sans({ weight: "400" , subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
