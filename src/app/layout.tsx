import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import SVGIMG from "../../public/logo.svg";

export const meta: Metadata = {
  title: "My App",
  description: "My app description",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased h-screen flex items-center p-5 flex-col`}
      >
        <header className="flex items-center justify-center h-24 w-full flex-col gap-4">
          <Image src={SVGIMG} alt="Logo" className="w-32" />
        </header>
        <main className="h-full flex items-center flex-col max-w-xl w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
