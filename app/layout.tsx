import type { Metadata } from "next";
import { ComingSoonProvider } from "./components/commingsoon"; // ✅ Import the provider
import { CartProvider } from "./context/cartcontext";
import "./app.scss";
import Navbar from "./components/navbar";
import BottomNavbar from "./components/bottomnavbar";

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
        <ComingSoonProvider> {/* ✅ Now it wraps EVERYTHING */}
          <CartProvider>
            <Navbar />
            {children} {/* ✅ Now Home Page AND other pages can trigger the pop-up */}
            <BottomNavbar />
          </CartProvider>
        </ComingSoonProvider>
      </body>
    </html>
  );
}
