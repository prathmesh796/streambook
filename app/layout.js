import { Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        <div className="mx-auto min-h-[87.8vh] bg-dark_blue">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
