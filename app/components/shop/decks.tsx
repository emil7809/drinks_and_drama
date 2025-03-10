"use client";
import Image from "next/image";

export default function ShopDecks() {


    const decks = [
        { id: "first_deck", src: "/first_deck/back.png", title: "The First Deck" }
    ];

    return (
        <>

            <section id="shop_decks">
                <div className={`page_content ${decks.length === 1 ? "single-image" : ""}`}>
                    <h2 className="hidden">Decks</h2>
                    {decks.map((deck) => (
                        <div key={deck.id} className="clickable">
                            <Image src={deck.src} alt={deck.title} width={160} height={218} />
                            <div className="deck_title">
                                <h3>{deck.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}
