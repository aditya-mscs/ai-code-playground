import { Providers } from '@/redux/provider'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Influencer Marketplace',
  description: 'Connect businesses with influencers for product marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
