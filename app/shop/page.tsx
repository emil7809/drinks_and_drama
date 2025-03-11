"use client";
import React, { useState } from "react";
import ShopDecks from "../components/shop/decks";
import Merch from "../components/shop/merch";
import Loot from "../components/shop/loot";
import Cart from "../components/shop/cart";
import ShopNavbar from "../components/shop/shopnav";


export default function Shop() {
    const [activeSection, setActiveSection] = useState("decks");
    return (
        <>
            <main id="shop">
                <ShopNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
                {activeSection === "decks" && <ShopDecks />}
                {activeSection === "merch" && <Merch />}
                {activeSection === "loot" && <Loot />}
                {activeSection === "cart" && <Cart />}
            </main>
        </>
    )
}