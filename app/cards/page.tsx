"use client";
import React, { useState } from "react";
import CardsNavbar from "../components/cards/cardsnav";
import CardsHero from "../components/cards/cardshero";
import Decks from "../components/cards/decks";
import Booster from "../components/cards/booster";
import Builder from "../components/cards/builder";
import AllCards from "../components/cards/allcards";

export default function Cards() {
    const [activeSection, setActiveSection] = useState("decks"); // Default to "Decks"

    return (
        <>
            {/* Pass activeSection and setter to Navbar */}

            <main>
                <CardsHero />
                <CardsNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
                {/* Render only the active section */}
                {activeSection === "decks" && <Decks />}
                {activeSection === "booster" && <Booster />}
                {activeSection === "builder" && <Builder />}
                {activeSection === "all_cards" && <AllCards />}
            </main>
            <footer>
                <p>CVR</p>
            </footer>
        </>
    );
}
