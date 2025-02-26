"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log("ScrollY:", window.scrollY); // ✅ Check if scroll event works
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-left">
                <button className="play-button">Play</button>
            </div>

            <div className="nav-center">
                <Image
                    src="/icon_logo.png"
                    alt="Drinks & Drama Logo"
                    width={80}
                    height={80}
                    className="nav-logo"
                />
            </div>

            <div className="nav-right">
                <Link href="#"><Image src="/icons/search-icon.png" alt="Search" width={30} height={30} /></Link>
                <Link href="#"><Image src="/icons/cart-icon.png" alt="Cart" width={30} height={30} /></Link>
                <Link href="#"><Image src="/icons/profile-icon.png" alt="Profile" width={30} height={30} /></Link>
            </div>
        </nav>
    );
}
