"use client";
import { useState } from "react";
import Image from "next/image";
import DeckView from "./deckview";

export default function Decks() {
    const [selectedDeck, setSelectedDeck] = useState<string | null>(null); // State to track clicked deck

    const decks = [
        { id: "first_deck", src: "/first_deck/back.png", title: "The First Deck" }
    ];

    return (
        <>
            {!selectedDeck ? ( // Show decks only if no deck is selected
                <section id="decks">
                    <div className={`page_content ${decks.length === 1 ? "single-image" : ""}`}>
                        <h2 className="hidden">Decks</h2>
                        {decks.map((deck) => (
                            <div key={deck.id} onClick={() => setSelectedDeck(deck.id)} className="clickable">
                                <Image src={deck.src} alt={deck.title} width={160} height={218} />
                                <div className="deck_title">
                                    <h3>{deck.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ) : (
                <DeckView deckId={selectedDeck} setSelectedDeck={setSelectedDeck} />
            )}
        </>
    );
}
