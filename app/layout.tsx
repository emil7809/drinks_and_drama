import type { Metadata } from "next";

import './app.scss'
import Navbar from "./components/navbar";



export const metadata: Metadata = {
  title: "Drinks & Drama",
  description: "Break the ice and spark deep conversations with Drinks & Drama! A thrilling storytelling game designed to create unforgettable moments and meaningful connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
