import { Roboto, Work_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const work_sans = Work_Sans({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "StreamBook",
  description: "Your personnal movies and TV shows app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <Navbar/>
        <div className="m-auto bg-dark_blue">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
