import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from 'next/font/google'
 
const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "iconroof – ระแนงบังตา",
  description: "iconroof – ระแนงบังตา",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={kanit.className}
      >
        {children}
      </body>
    </html>
  );
}
