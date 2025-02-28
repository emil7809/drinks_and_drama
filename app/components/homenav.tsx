"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HomeNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > window.innerHeight * 0.3); // 30% of viewport height
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`home-nav ${isSticky ? "sticky" : ""}`}>
            <ul>
                {[
                    { id: "news", icon: "news.png", label: "News" },
                    { id: "tutorial", icon: "tutorial.png", label: "Tutorial" },
                    { id: "subscribe", icon: "subscribe.png", label: "Subscribe" },
                    { id: "vision", icon: "vision.png", label: "Vision" },
                ].map(({ id, icon, label }) => (
                    <li key={id}>
                        <a href={`#${id}`}>
                            <Image src={`/icons/${icon}`} alt={label} width={40} height={40} />
                            <span>{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HomeNavbar;
