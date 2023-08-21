"use client"

import './globals.css';

import NextNProgress from "nextjs-progressbar";

import NavBar from '@/components/navBar';
import Footer from "@/components/footer"


import { CartProvider } from '@/context/cartContext';

import { SessionProvider } from "next-auth/react"

// export const metadata = {
//   title: 'chapter85',
//   description: 'best quality leather products.',
//   icons: {
//     icon: '/logo.jpeg',
//   },
// }



export default function RootLayout({ children, session }) {

  return (

    <html lang="en">
      <body >
        <SessionProvider session={session}>

          <CartProvider>

            <NextNProgress />
            <NavBar />
            {children}
            <Footer />

          </CartProvider>

        </SessionProvider>
      </body>
    </html>

  )
}
