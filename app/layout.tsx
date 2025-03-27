import type { Metadata } from "next";
import { ComingSoonProvider } from "./components/commingsoon";
import { CartProvider } from "./context/cartcontext";
import "./app.scss";
import Navbar from "./components/navbar";
import BottomWrapper from "./components/bottomnavwrapper";

export const metadata: Metadata = {
  title: "Drinks & Drama",
  description:
    "Break the ice and spark deep conversations with Drinks & Drama! A thrilling storytelling game designed to create unforgettable moments and meaningful connections.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ComingSoonProvider>
          <CartProvider>
            <Navbar />
            {children}
            <BottomWrapper />
          </CartProvider>
        </ComingSoonProvider>
      </body>
    </html>
  );
}
