"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CardsNavbar = () => {

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        /*  console.log("Scroll listener added"); // Debugging */

        const handleScroll = () => {
            /*  console.log("Scrolling detected"); // Debugging */

            const sections = ["decks", "booster", "builder", "all_cards"];
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    /*  console.log(`Checking section ${section}:`, rect.top, rect.bottom); */ // Debugging
                    if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 100) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
            /* console.log("Active Section:", currentSection); // Debugging */
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            /*  console.log("Scroll listener removed"); // Debugging */
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    return (
        <nav className="cards_nav">
            <ul>
                {[
                    { id: "decks", icon: "deck.png", label: "Decks" },
                    { id: "booster", icon: "booster_pack.png", label: "Booster" },
                    { id: "builder", icon: "deck_builder.png", label: "Builder" },
                    { id: "all_cards", icon: "all.png", label: "All" }, // Make sure this matches
                ]
                    .map(({ id, icon, label }) => (
                        <li key={id}>
                            <a href={`#${id}`} className={activeSection === id ? "active" : ""}>
                                <Image src={`/icons/${icon}`} alt={label} width={40} height={40} />
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};

export default CardsNavbar;
