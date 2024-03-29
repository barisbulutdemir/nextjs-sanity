import './globals.css'
import type { Metadata } from 'next'


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
    <html lang="en">
      <body className="min-h-screen bg-slate-100 font-poppins">{children}</body>
    </html>
  )
}
