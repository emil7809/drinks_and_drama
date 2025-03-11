"use client";
import { useComingSoon } from "./commingsoon"; // ✅ Import the hook
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const { showPopup } = useComingSoon(); // ✅ Use the pop-up function
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-left">
                <button className="play-button" onClick={showPopup}>Play</button> {/* ✅ Calls global pop-up */}
            </div>

            <div className="nav-center">
                <Image src="/icon_logo.png" alt="Drinks & Drama Logo" width={80} height={80} className="nav-logo" />
            </div>

            <div className="nav-right">
                <Link onClick={showPopup} href="#"><Image src="/icons/search-icon.png" alt="Search" width={30} height={30} /></Link>
                <div className="nav_cart">
                    <span>1</span>
                    <Link href="#"><Image src="/icons/cart-icon.png" alt="Cart" width={30} height={30} /></Link>
                </div>
                <Link onClick={showPopup} href="#"><Image src="/icons/profile-icon.png" alt="Profile" width={30} height={30} /></Link>
            </div>
        </nav>
    );
}
