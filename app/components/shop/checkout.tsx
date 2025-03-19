"use client";

import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import CardStyle from "../stripestyles";
import { useCart } from "@/app/context/cartcontext";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout({ goBackToCart }: { goBackToCart: () => void }) {
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [shippingConfirmed, setShippingConfirmed] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    return (
        <section id="card_shipping_form">
            {/* Back Button */}
            <div
                className="clickable"
                onClick={() => {
                    if (orderConfirmed) {
                        goBackToCart(); // 👈 Go back to cart when order is confirmed
                    } else if (shippingConfirmed) {
                        setShippingConfirmed(false);
                    } else if (paymentConfirmed) {
                        setPaymentConfirmed(false);
                    } else {
                        goBackToCart();
                    }
                }}
            >
                <Image src="/icons/back.png" alt="back" width={40} height={40} />
                <p>
                    {orderConfirmed
                        ? "Back to Cart"  // 👈 Now it goes back to Cart!
                        : shippingConfirmed
                            ? "Back to Shipping"
                            : paymentConfirmed
                                ? "Back to Payment"
                                : "Back to Cart"}
                </p>
            </div>

            {/* Order Confirmation */}
            {orderConfirmed ? (
                <OrderConfirmed />
            ) : shippingConfirmed ? (
                <OrderReview onConfirmOrder={() => setOrderConfirmed(true)} />
            ) : paymentConfirmed ? (
                <ShippingForm onShippingSuccess={() => setShippingConfirmed(true)} />
            ) : (
                <Elements stripe={stripePromise}>
                    <PaymentForm onPaymentSuccess={() => setPaymentConfirmed(true)} />
                </Elements>
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

        setTimeout(() => {
            console.log("Payment Skipped (Dev Mode)");
            onPaymentSuccess();
            setLoading(false);
        }, 1000);
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Payment Details</h2>
            <div className="form-group">
                <label>Card Number</label>
                <div className="card-input">
                    <CardNumberElement options={CardStyle} />
                </div>
            </div>
            <div className="form-group">
                <label>Expiry Date</label>
                <div className="card-input">
                    <CardExpiryElement options={CardStyle} />
                </div>
            </div>
            <div className="form-group">
                <label>CVC</label>
                <div className="card-input">
                    <CardCvcElement options={CardStyle} />
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
function ShippingForm({ onShippingSuccess }: { onShippingSuccess: () => void }) {
    return (
        <form className="shipping-form" onSubmit={(e) => { e.preventDefault(); onShippingSuccess(); }}>
            <h2>Shipping Information</h2>
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
            <button className="pay-btn">Confirm Shipping</button>
        </form>
    );
}

// 🏆 Order Review Component
function OrderReview({ onConfirmOrder }: { onConfirmOrder: () => void }) {
    const { cart, clearCart } = useCart();  // Get cart data & function to clear it

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Handle Order Confirmation
    const handleConfirmOrder = () => {
        clearCart();  // 🏆 Empty the cart
        onConfirmOrder();
    };

    return (
        <div className="order-review">
            <h2>Review Your Order</h2>

            {/* 🏆 Display Shipping Details */}
            <div className="order-section">
                <h3>Shipping Information</h3>
                <p><strong>Full Name:</strong> John Doe</p>
                <p><strong>Address:</strong> 123 Fantasy St., Copenhagen, 1000</p>
                <p><strong>Phone:</strong> +45 12345678</p>
            </div>

            {/* 🏆 Display Payment Details */}
            <div className="order-section">
                <h3>Payment Details</h3>
                <p><strong>Payment Method:</strong> Visa **** **** **** 1234</p>
            </div>

            {/* 🏆 Display Ordered Items */}
            <div className="order-section">
                <h3>Items</h3>
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id} className="order-item">
                            <p><strong>{item.title}</strong> x{item.quantity}</p>
                            <p>{item.price * item.quantity} kr</p>
                        </div>
                    ))
                ) : (
                    <p>No items in cart</p>
                )}
            </div>

            {/* 🏆 Total Price */}
            <div className="order-total">
                <p><strong>Total Price:</strong> {totalPrice} kr</p>
            </div>

            <button className="pay-btn" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
    );
}



// 🏆 Order Confirmation Component
function OrderConfirmed() {
    return (
        <div className="order-confirmed">
            <h2>Order Confirmed!</h2>
            <p>Thank you for your order. Your items will be shipped soon.</p>
        </div>
    );
}
