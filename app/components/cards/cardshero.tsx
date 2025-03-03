import Image from "next/image"

export default function CardsHero() {
    return (
        <section id="cards_hero">
            <h1 className="hidden">Cards</h1>
            <div className="page_content">
                <h2 className="hidden">News</h2>

                <div className="card_fan">
                    <div className="card">
                        <Image src="/first_deck/do_me.png" alt="do me" width={160} height={218} />
                    </div>
                    <div className="card">
                        <Image src="/first_deck/you_creep.png" alt="Invisibility" width={160} height={218} />
                    </div>
                    <div className="card">
                        <Image src="/first_deck/skaal.png" alt="SKÅL" width={160} height={218} />
                    </div>
                    <div className="card">
                        <Image src="/first_deck/lap_dance.png" alt="Lap Dance" width={160} height={218} />
                    </div>
                    <div className="card">
                        <Image src="/first_deck/youre_under_arrest.png" alt="You're under arrest" width={160} height={218} />
                    </div>
                </div>
                <h2>The First Deck</h2>
                <p>Welcome to the realm of Drinks & Drama, where each card unlocks a world of unique rules, ranging from hilarious antics like &quot;Grab the nearest book and read a sentence with your best Snape impression&quot; to thought-provoking questions like &quot;If you could get away with a crime, what would you do?&quot;</p>
                <button>Shop</button>
            </div>
        </section>
    )
}