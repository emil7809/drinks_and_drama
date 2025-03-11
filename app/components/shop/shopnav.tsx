"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/app/context/cartcontext";

const ShopNavbar = ({
    activeSection,
    setActiveSection
}: {
    activeSection: string;
    setActiveSection: (section: string) => void;
}) => {
    const { cartCount } = useCart();
    return (
        <nav className="cards_nav">
            <ul>
                {[
                    { id: "decks", icon: "deck.png", label: "Decks" },
                    { id: "merch", icon: "merch.png", label: "Merch" },
                    { id: "loot", icon: "loot.png", label: "Loot" },
                    { id: "cart", icon: "cart.png", label: "Cart" },
                ].map(({ id, icon, label }) => (
                    <li key={id}>
                        <div
                            className={activeSection === id ? "active" : ""}
                            onClick={() => setActiveSection(id)}
                        >
                            {id === "cart" && (
                                <span className="cart-count">
                                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}</span>
                            )}
                            <Image src={`/icons/${icon}`} alt={label} width={40} height={40} />
                            <span>{label}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default ShopNavbar;
