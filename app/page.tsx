// app/page.tsx
import HomeHero from "./components/home/homehero";
import News from "./components/home/news";
import Tutorial from "./components/home/tutorial";
import Subscribe from "./components/home/subscribe";
import Vision from "./components/vision";
import HomeNavbar from "./components/home/homenav"

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
