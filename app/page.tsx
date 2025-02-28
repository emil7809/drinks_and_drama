// app/page.tsx
import Image from "next/image";
import HomeNavbar from "./components/homenav"

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <main>
        <section id="home_hero">
          <div className="page_content">
            <h1 className="hidden">Drinks & Drama</h1>
            <Image src="/full_logo.png" alt="Drinks & Drama full logo" className="full_logo" layout="intrinsic" width={600} height={300} />
            <p>Get ready for unforgettable nights of laughs, dares,
              and probably some questionable decisions.
              <br />
              Let&apos;s go</p>
            <button>Play</button>
          </div>
        </section>
        <section id="news">
          <h2>News</h2>
          <p>Latest updates about Drinks & Drama.</p>
        </section>

        <section id="tutorial">
          <h2>Tutorial</h2>
          <p>How to play the game.</p>
        </section>

        <section id="subscribe">
          <h2>Subscribe</h2>
          <p>Get updates and special offers.</p>
        </section>

        <section id="vision">
          <h2>Vision</h2>
          <p>The future of Drinks & Drama.</p>
        </section>
      </main>
    </>
  );
}
