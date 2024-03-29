
import './globals.css'
import type { Metadata } from 'next'
import {  Montserrat } from 'next/font/google'
import SideBar from '@/components/Shared/Sidebar'
import { MenuProvider } from '@/components/Providers/MenuProvider'
import Navbar from '@/components/Shared/Menu/Header'
import ProgressbarProvider from '@/components/Providers/progressbarProvider'
import { Toaster } from 'react-hot-toast'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Musemate',
  description: 'Helpful tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo-t.svg" type="image/x-icon" />
      </head>
    <body className={`${montserrat.className} text-neutral-50 w-full h-full`} >

        <ProgressbarProvider>
               <MenuProvider>
          <div className="flex w-full ">
              <SideBar />
               <main className="flex-1 w-full lg:pl-[300px]  p-4 pb-8">
                <Navbar />    
                   <Toaster/>
                   {children}
                </main>
          </div> 
      </MenuProvider>
       </ProgressbarProvider>

      </body>
    </html>
  )
}
