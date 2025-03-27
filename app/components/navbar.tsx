"use client";
import { useComingSoon } from "./commingsoon"; // ✅ Import the hook
import { useState, useEffect } from "react";
import { useCart } from "../context/cartcontext";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const { showPopup } = useComingSoon(); // ✅ Use the pop-up function
    const [scrolled, setScrolled] = useState(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-left">
                <Link href="/play">
                    <button className="play-button">Play</button> {/* ✅ Calls global pop-up */}
                </Link>
            </div>

            <div className="nav-center">
                <Link href="/">
                    <Image src="/icon_logo.png" alt="Drinks & Drama Logo" width={80} height={80} className="nav-logo" />
                </Link>
            </div>

            <div className="nav-right">
                <Link onClick={showPopup} href="#"><Image src="/icons/search-icon.png" alt="Search" width={30} height={30} /></Link>
                <div className="nav_cart">
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    <Link href="/shop?view=cart"><Image src="/icons/cart-icon.png" alt="Cart" width={30} height={30} /></Link>
                </div>
                <Link onClick={showPopup} href="#"><Image src="/icons/profile-icon.png" alt="Profile" width={30} height={30} /></Link>
            </div>
        </nav>
    );
}
