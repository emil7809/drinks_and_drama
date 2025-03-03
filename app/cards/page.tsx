import CardsNavbar from "../components/cards/cardsnav";
import CardsHero from "../components/cards/cardshero";
import Decks from "../components/cards/decks";
import Booster from "../components/cards/booster";
import Builder from "../components/cards/builder";
import AllCards from "../components/cards/allcards";

export default function Cards() {
    return (
        <>
            <CardsNavbar />
            <main>
                <CardsHero />
                <Decks />
                <Booster />
                <Builder />
                <AllCards />
            </main>
        </>
    );
}
