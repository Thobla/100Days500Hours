import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from '@/app/ui/navbar'

import {pixelify} from '@/app/ui/fonts'

//const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
//});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cool website",
  description: "Some website",
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pixelify.className} ${geistMono.variable} antialiased`}
      >
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <div className='w-full flex-none md:w-64'>
            <SideNav/>
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
