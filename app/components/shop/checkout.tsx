"use client";

import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import CardStyle from "../stripestyles";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout({ goBackToCart }: { goBackToCart: () => void }) {
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);

    return (
        <section id="card_shipping_form">
            {/* Back Button */}
            <div className="clickable" onClick={!paymentConfirmed ? goBackToCart : () => setPaymentConfirmed(false)}>
                <Image src="/icons/back.png" alt="back" width={40} height={40} />
                <p>{!paymentConfirmed ? "Back to Cart" : "Back to Payment Details"}</p>
            </div>

            {!paymentConfirmed ? (
                <>
                    {/* Payment Form */}
                    <h2>Payment Details</h2>
                    <Elements stripe={stripePromise}>
                        <PaymentForm onPaymentSuccess={() => setPaymentConfirmed(true)} />
                    </Elements>
                </>
            ) : (
                <>
                    {/* Shipping Form (Shown After Payment) */}
                    <h2>Shipping Information</h2>
                    <ShippingForm />
                </>
            )}
        </section>
    );
}

// 🏆 Payment Form Component
function PaymentForm({ onPaymentSuccess }: { onPaymentSuccess: () => void }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        setErrorMessage("");

        /* const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)!
        });

        if (error) {
            setErrorMessage(error.message || "Payment failed");
            setLoading(false);
        } else {
            console.log("Payment Successful:", paymentMethod);
            onPaymentSuccess(); // 👈 Show shipping form after payment success
        } */

        // Fake delay to simulate processing
        setLoading(true);
        setTimeout(() => {
            console.log("Payment Skipped (Dev Mode)");
            onPaymentSuccess(); // Show shipping form without Stripe validation
            setLoading(false);
        }, 1000);
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Card Details</label>
                <div className="card-input">
                    <CardElement options={CardStyle} />
                </div>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button className="pay-btn" disabled={!stripe || loading}>
                {loading ? "Processing..." : "Confirm Payment"}
            </button>
        </form>
    );
}

// 🏆 Shipping Form Component
function ShippingForm() {
    return (
        <form className="shipping-form">
            <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" placeholder="123 Fantasy St." required />
            </div>
            <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="Copenhagen" required />
            </div>
            <div className="form-group">
                <label>Postal Code</label>
                <input type="text" placeholder="1000" required />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+45 12345678" required />
            </div>
            <button className="pay-btn">Submit Order</button>
        </form>
    );
}
