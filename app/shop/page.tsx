"use client";
import React, { useState } from "react";
import ShopDecks from "../components/shop/decks";
import ShopNavbar from "../components/shop/shopnav";


export default function Shop() {
    const [activeSection, setActiveSection] = useState("decks");
    return (
        <>
            <main>
                <ShopNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
                {activeSection === "decks" && <ShopDecks />}
            </main>
        </>
    )
}