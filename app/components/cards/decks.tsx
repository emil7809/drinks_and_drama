import Image from "next/image";

export default function Decks() {
    const images = [
        "/first_deck/back.png",
    ];

    return (
        <section id="decks">
            <div className={`page_content ${images.length === 1 ? "single-image" : ""}`}>
                <h2 className="hidden">Decks</h2>
                {images.map((src, index) => (
                    <div key={index}>
                        <Image src={src} alt={`Deck ${index}`} width={160} height={218} />
                        <div className="deck_title">
                            <h3>The Firs Deck</h3>
                            {/*  <Image src="/icons/like.png" alt="like" width={160} height={218} /> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
