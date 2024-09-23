import type { Metadata } from "next";
import localFont from "next/font/local";
import { RootNavbar } from "@/components/root-navbar";
import { Footer } from "@/components/footer";
import { Flowbite } from "flowbite-react";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Molecule3D",
  description: "A 3D molecular viewer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" />
      <Flowbite>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full min-h-screen justify-between flex flex-col bg-slate-200 dark:bg-slate-900 dark:text-slate-200 text-slate-800`}
        >
          <RootNavbar />
          <div className="flex flex-grow max-w-screen-xl mx-auto w-full h-full">{children}</div>
          <Footer />
        </body>
      </Flowbite>
    </html>
  );
}
