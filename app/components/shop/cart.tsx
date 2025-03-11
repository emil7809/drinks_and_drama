"use client";
/* import { useState } from "react"; */
import Image from "next/image";
/* import { useCart } from "@/app/context/cartcontext"; */

export default function Cart() {


    /* const { cart, removeFromCart } = useCart(); */

    const decks = [
        { id: "first_deck", src: "/first_deck/back.png", title: "The First Deck", price: "250" }
    ];



    return (
        <>

            <section id="shop_decks">
                <div className={`page_content ${decks.length === 1 ? "single-image" : ""}`}>
                    <h2 className="hidden">Decks</h2>
                    {decks.map((deck) => (
                        <div key={deck.id}>
                            <Image
                                src={deck.src}
                                alt={deck.title}
                                width={160}
                                height={218}
                            />
                            <div className="deck_title">
                                <div>
                                    <p>{deck.price} kr</p>
                                    <h3>{deck.title}</h3>
                                </div>
                            </div>
                            <div className="remove_add_cart">
                                <Image src="/icons/minus.png" alt="selected" width={40} height={40} />
                                <span>1</span>
                                <Image className="x" src="/icons/x.png" alt="selected" width={40} height={40} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="price_overview">
                    <div>
                        <p>Total</p>
                        <span>250 kr</span>
                    </div>
                    <div>
                        <p>Discount</p>
                        <span>0 kr</span>
                    </div>
                    <div>
                        <p>Total</p>
                        <span>250 kr</span>
                    </div>
                    <button>Chose Payment</button>
                </div>
            </section>

        </>
    );
}
