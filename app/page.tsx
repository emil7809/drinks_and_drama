// app/page.tsx
import Image from "next/image";


export default function Home() {
  return (
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
    </main>
  );
}
