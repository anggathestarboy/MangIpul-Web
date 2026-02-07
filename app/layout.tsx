import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mang Ipul UMKM - Jajanan Mie Spesial',
  description: 'UMKM Mang Ipul menyediakan berbagai jajanan mie, mie lidi, dan makaroni dengan resep spesial keluarga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}