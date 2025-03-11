"use client";
import { useState } from "react";
import Image from "next/image";
import DeckView from "../cards/deckview";
import { useCart } from "@/app/context/cartcontext";

export default function ShopDecks() {
    const [selectedDeck, setSelectedDeck] = useState<string | null>(null); // State to track clicked deck
    const [selectedDecks, setSelectedDecks] = useState<{ [key: string]: boolean }>({}); // State for individual selection

    const { addToCart } = useCart();

    const decks = [
        { id: "first_deck", src: "/first_deck/back.png", title: "The First Deck", price: "250" }
    ];

    // Toggle selected state for a specific deck
    const toggleSelection = (deckId: string) => {
        setSelectedDecks((prev) => ({
            ...prev,
            [deckId]: !prev[deckId] // Toggle the specific deck
        }));
    };

    // Add selected decks to the cart
    const handleAddToCart = () => {
        // Filter only selected decks
        const selectedItems = decks.filter(deck => selectedDecks[deck.id]);

        // Add each selected deck to the cart
        selectedItems.forEach(deck => {
            addToCart({
                id: deck.id,
                title: deck.title,
                price: Number(deck.price), // Convert string to number
                image: deck.src,
                quantity: 1, // Default quantity
            });
        });

        // Clear selections after adding to cart
        setSelectedDecks({});
    };

    return (
        <>
            {!selectedDeck ? ( // Show decks only if no deck is selected
                <section id="shop_decks">
                    <div className={`page_content ${decks.length === 1 ? "single-image" : ""}`}>
                        <h2 className="hidden">Decks</h2>
                        {decks.map((deck) => (
                            <div key={deck.id} className="clickable">
                                <Image
                                    src={deck.src}
                                    alt={deck.title}
                                    width={160}
                                    height={218}
                                    onClick={() => setSelectedDeck(deck.id)}
                                />
                                <div className="deck_title">
                                    <div>
                                        <p>{deck.price} kr</p>
                                        <h3>{deck.title}</h3>
                                    </div>
                                    {/* Clicking toggles selection state for this specific deck */}
                                    <div onClick={(e) => { e.stopPropagation(); toggleSelection(deck.id); }}>
                                        {selectedDecks[deck.id] ? (
                                            <Image src="/icons/selected.png" alt="selected" width={40} height={40} />
                                        ) : (
                                            <Image src="/icons/select.png" alt="select" width={40} height={40} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddToCart} disabled={Object.values(selectedDecks).every(selected => !selected)}>Add to Cart</button>
                </section>
            ) : (
                <DeckView deckId={selectedDeck} setSelectedDeck={setSelectedDeck} />
            )}
        </>
    );
}
