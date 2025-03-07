"use client";
import Image from "next/image";
import React, { useState } from "react";

const AllCards = () => {
    const images = [
        "/first_deck/394.png",
        "/first_deck/394.png",
        "/first_deck/394.png",
        "/first_deck/394.png",
        "/first_deck/394.png",
    ];

    const [activeSection, setActiveSection] = useState("");

    return (
        <section id="all_cards">
            <div>
                <nav className="cards_filter">
                    <ul>
                        {[
                            { id: "truth", icon: "truth.png", label: "Truth" },
                        ]
                            .map(({ id, icon, label }) => (
                                <li key={id}>
                                    <div className={activeSection === id ? "active" : ""} onClick={() => setActiveSection(id)}>
                                        <Image src={`/icons/${icon}`} alt={label} width={40} height={40} />
                                        <span>{label}</span>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </nav>
            </div>
            <div className="page_content">
                {images.map((src, index) => (
                    <div key={index}>
                        <Image src={src} alt={`Card ${index}`} width={160} height={218} />

                    </div>
                ))}
            </div>
        </section>
    )
}

export default AllCards;