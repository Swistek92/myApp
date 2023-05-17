import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../Components/Header/Header";
import "../sass/main.css";
import logo from "../public/logo.png";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export type layoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: layoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='logo'>
          <Image alt='logo' src={logo} width={100} height={100} />
        </div>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}