"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ShopDecks from "../components/shop/decks";
import Merch from "../components/shop/merch";
import Loot from "../components/shop/loot";
import Cart from "../components/shop/cart";
import ShopNavbar from "../components/shop/shopnav";


export default function Shop() {
    const searchParams = useSearchParams();
    const defaultSection = searchParams.get("view") || "decks";

    const [activeSection, setActiveSection] = useState(defaultSection);

    useEffect(() => {
        const view = searchParams.get("view");
        if (view) {
            setActiveSection(view);
        }
    }, [searchParams]);

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