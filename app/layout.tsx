"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../Components/Header/Header";
import "../sass/main.css";
import logo from "../public/logo.png";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export type layoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: layoutProps) {
  return (
    <html lang='en'>
      <head>
        <title>swistoklik</title>
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <div className='logo'>
            <Image alt='logo' src={logo} width={100} height={100} />
          </div>
          <Header />
          <div className='mainContent'>{children}</div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
