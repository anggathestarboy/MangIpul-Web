import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Mang Ipul - Jajanan Snack Enak & Lezat | Makroni, Mie & Mie Lidi Pedas",
  description: "Mang Ipul menyediakan berbagai macam jajanan snack lezat seperti makroni, mie, dan mie lidi pedas. Nikmati cita rasa gurih dan pedas yang menggugah selera!",
  keywords: "snack, jajanan, makroni, mie lidi pedas, mie pedas, camilan, makanan ringan, Mang Ipul",
  authors: [{ name: "Mang Ipul" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
   verification: {
    google: "nNKuI2XYFZPj2T72QHx-xbbgiKJE4cqFEnhX5D3LIEk",
  },

   icons: {
    icon: "/logo.png", // ✅ favicon di sini
  },
  openGraph: {
    title: "Mang Ipul - Jajanan Snack Enak & Lezat",
    description: "Berbagai macam jajanan snack lezat seperti makroni, mie, dan mie lidi pedas",
    url: "https://mangipul.vercel.app",
    siteName: "Mang Ipul",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mang Ipul - Jajanan Snack Enak",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mang Ipul - Jajanan Snack Enak & Lezat",
    description: "Berbagai macam jajanan snack lezat seperti makroni, mie, dan mie lidi pedas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${poppins.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}