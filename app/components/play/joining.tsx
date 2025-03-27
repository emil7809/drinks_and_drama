"use client"

import { useState } from "react";
import Image from "next/image";
import IsJoinerReady from "./isjoinerready";

export default function Joining({ goBack }: { goBack: () => void }) {
    const [gameCode, setGameCode] = useState("");
    const isCodeValid = gameCode === "55555";

    const [joinerReady, setJoinerReady] = useState(false);

    return (
        <>
            {!joinerReady ? (
                <section id="joining">
                    <div className="page_content">
                        <Image
                            src="/full_logo.png"
                            alt="Drinks & Drama full logo"
                            className="full_logo"
                            layout="intrinsic"
                            width={600}
                            height={300}
                        />
                        <div className="game_code_container">
                            <p>Game Code</p>
                            <form action="">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Enter code..."
                                        value={gameCode}
                                        onChange={(e) => setGameCode(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>

                        <button
                            onClick={() => setJoinerReady(true)}
                            className={`pay-btn ${!isCodeValid ? "disabled-btn" : ""}`}
                            disabled={!isCodeValid}
                        >
                            Join
                        </button>


                        <div className="clickable" onClick={goBack}>
                            <Image src="/icons/back.png" alt="back" width={40} height={40} />
                            <p>Back</p>
                        </div>
                    </div>
                </section>
            ) : (
                <IsJoinerReady goBackToGameCode={() => setJoinerReady(false)} />
            )}
        </>
    );
}
