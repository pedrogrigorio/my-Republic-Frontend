import './globals.css'
import '@/lib/dayjs'

import Sidebar from '@/components/layout/sidebar'
import { Poppins } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'myRepublic',
  description: 'Encontre sua república estudantil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-y-hidden`}>
        <div className="flex h-screen min-w-[650px]">
          <Sidebar />
          <main className="relative flex-1 bg-gray-100 text-primary">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  )
}
