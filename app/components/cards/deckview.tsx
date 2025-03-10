"use client";
import Image from "next/image";
import React, { useState } from "react";

const DeckView = ({ deckId, setSelectedDeck }: { deckId: string; setSelectedDeck: (deck: string | null) => void }) => {

    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    // Example card data with filters
    const deckCards: { [key: string]: { id: string; src: string; type: string }[] } = {
        first_deck: [
            { id: "1", src: "/first_deck/394.png", type: "truth" },
            { id: "2", src: "/first_deck/394.png", type: "dare" },
            { id: "3", src: "/first_deck/394.png", type: "trap" },
            { id: "4", src: "/first_deck/394.png", type: "group_truth" },
            { id: "5", src: "/first_deck/394.png", type: "group_dare" },
        ],
    };

    // Filter logic: Show all if no filter is active, otherwise filter by type
    const filteredCards = activeFilter
        ? deckCards[deckId]?.filter((card) => card.type === activeFilter)
        : deckCards[deckId];

    return (
        <section id="cards_view">
            {!selectedCard ? (
                <>
                    <div className="back_and_deck_name">
                        <div className="clickable" onClick={() => setSelectedDeck(null)}>
                            <Image src="/icons/back.png" alt="back" width={40} height={40} />
                            <p>Back</p>
                        </div>
                        <h3>First Deck</h3>
                    </div>


                    {/* Filter Navigation */}
                    <nav className="cards_filter">
                        <ul>
                            {[
                                { id: "truth", icon: "truth.png", label: "Truth" },
                                { id: "dare", icon: "dare.png", label: "Dare" },
                                { id: "trap", icon: "trap.png", label: "Trap" },
                                { id: "group_truth", icon: "group_truth.png", label: "Group Truth" },
                                { id: "group_dare", icon: "group_dare.png", label: "Group Dare" },
                            ].map(({ id, icon, label }) => (
                                <li key={id}>
                                    <a
                                        className={activeFilter === id ? "active" : ""}
                                        onClick={() =>
                                            setActiveFilter(activeFilter === id ? null : id)
                                        }
                                    >
                                        <Image src={`/icons/${icon}`} alt={label} width={40} height={40} />
                                        <span>{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Cards Grid */}
                    <div className="page_content">
                        {filteredCards?.map((card, index) => (
                            <div key={index} onClick={() => setSelectedCard(card.src)} className="card_item">
                                <Image src={card.src} alt={`Card ${index}`} width={160} height={218} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                // Enlarged Card View
                <div className="selected_card_view">
                    <div className="clickable" onClick={() => setSelectedCard(null)}>
                        <Image src="/icons/back.png" alt="back" width={40} height={40} />
                        <p>Back</p>
                    </div>
                    <Image src={selectedCard} alt="Selected Card" width={500} height={700} className="selected_card" />
                </div>
            )}
        </section>
    );
};

export default DeckView;
