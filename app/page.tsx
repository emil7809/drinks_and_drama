// app/page.tsx
import HomeHero from "./components/homehero";
import News from "./components/news";
import Tutorial from "./components/tutorial";
import Subscribe from "./components/subscribe";
import Vision from "./components/vision";
import HomeNavbar from "./components/homenav"

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <main>
        <HomeHero />
        <News />
        <Tutorial />
        <Subscribe />
        <Vision />
      </main>
    </>
  );
}
