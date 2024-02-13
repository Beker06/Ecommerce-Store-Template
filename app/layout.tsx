import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store Template",
  description: "Store Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-[#18191A] dark:text-neutral-100">
      <body className={font.className} >
        <ToastProvider />
        <ModalProvider />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
