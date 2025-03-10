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
                            { id: "dare", icon: "dare.png", label: "Dare" },
                            { id: "trap", icon: "trap.png", label: "Trap" },
                            { id: "group_truth", icon: "group_truth.png", label: "Group Truth" },
                            { id: "group_dare", icon: "group_dare.png", label: "Group Dare" },
                        ]
                            .map(({ id, icon, label }) => (
                                <li key={id}>
                                    <a className={activeSection === id ? "active" : ""}
                                        onClick={() => setActiveSection(activeSection === id ? "" : id)}>
                                        <Image src={`/icons/${icon}`} alt={label} width={40} height={40} />
                                        <span>{label}</span>
                                    </a>
                                </li>
                            ))}
                        {/* <li>
                            <span>0</span> <p>Cards</p>
                        </li> */}
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