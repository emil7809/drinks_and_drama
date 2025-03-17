"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/cartcontext";
import Checkout from "./checkout";

export default function Cart() {

    const { cart, updateQuantity, removeFromCart } = useCart(); // Use the cart context
    const [showCheckout, setShowCheckout] = useState(false);

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const decks = [
        { id: "first_deck", src: "/first_deck/back.png", title: "The First Deck", price: "250" }
    ];



    return (
        <>
            {!showCheckout ? (
                <section id="cart">
                    <div className={`page_content ${decks.length === 1 ? "single-image" : ""}`}>
                        <h2 className="hidden">Decks</h2>

                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <div key={item.id}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={160}
                                        height={218}
                                    />
                                    <div className="deck_title">
                                        <div>
                                            <p>{item.price} kr</p>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                    <div className="remove_add_cart">
                                        {item.quantity === 1 ? (
                                            <Image
                                                className="remove_cart"
                                                src="/icons/trash.png"
                                                alt="remove item"
                                                width={40} height={40}
                                                onClick={() => removeFromCart(item.id)}
                                            />
                                        ) : (
                                            <Image
                                                src="/icons/minus.png"
                                                alt="selected"
                                                width={40} height={40}
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            />
                                        )}



                                        <span>{item.quantity}</span>
                                        <Image className="x"
                                            src="/icons/x.png"
                                            alt="selected"
                                            width={40} height={40}
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h2>Your cart is empty</h2>
                        )}
                    </div>
                    <div className="price_overview">
                        <div>
                            <p>Total</p>
                            <span>{totalPrice} kr</span>
                        </div>
                        <div>
                            <p>Discount</p>
                            <span>0 kr</span>
                        </div>
                        <div>
                            <p>Total</p>
                            <span>{totalPrice} kr</span>
                        </div>
                        <button onClick={() => setShowCheckout(true)}>Checkout</button>
                    </div>
                </section>
            ) : (

                <Checkout goBackToCart={() => setShowCheckout(false)} />
            )}

        </>
    );
}
