"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";


/* import { useComingSoon } from "../commingsoon"; */

export default function HomeHero() {
    /*   const { showPopup } = useComingSoon(); */
    const router = useRouter();
    return (
        <section id="home_hero">
            <div className="page_content">
                <h1 className="hidden">Drinks & Drama</h1>
                <Image src="/full_logo.png" alt="Drinks & Drama full logo" className="full_logo" layout="intrinsic" width={600} height={300} />
                <p>Get ready for unforgettable nights of laughs, dares,
                    and probably some questionable decisions.
                    <br />
                    Let&apos;s go</p>
                <button onClick={() => router.push('/play')}>Play</button>
            </div>
        </section>
    )
}
