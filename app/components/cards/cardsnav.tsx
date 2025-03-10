"use client";
import React from "react";
import Image from "next/image";

const CardsNavbar = ({
    activeSection,
    setActiveSection
}: {
    activeSection: string;
    setActiveSection: (section: string) => void;
}) => {
    return (
        <nav className="cards_nav">
            <ul>
                {[
                    { id: "decks", icon: "deck.png", label: "Decks" },
                    { id: "booster", icon: "booster_pack.png", label: "Booster" },
                    { id: "builder", icon: "deck_builder.png", label: "Builder" },
                    { id: "all_cards", icon: "all.png", label: "Cards" },
                ].map(({ id, icon, label }) => (
                    <li key={id}>
                        <div
                            className={activeSection === id ? "active" : ""}
                            onClick={() => setActiveSection(id)}
                        >
                            <Image src={`/icons/${icon}`} alt={label} width={40} height={40} />
                            <span>{label}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CardsNavbar;
