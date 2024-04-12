import type { Metadata } from "next";
import { Rethink_Sans } from 'next/font/google'
import "./globals.css";

const rethink_sans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rethink_sans',
})

export const metadata: Metadata = {
  title: "LiviTeq Demo",
  description: "Prototype demo for cell counting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rethink_sans.className}>{children}</body>
    </html>
  );
}
