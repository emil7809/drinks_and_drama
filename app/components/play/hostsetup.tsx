"use client"

import Image from "next/image"
import { useState } from "react"

export default function HostSetup({ goBack }: { goBack: () => void }) {
    const [hostready, setHostReady] = useState(false)

    return (
        <>
            <section id="host_setup">

                <div className="playeres_avatars_container">
                    <div className="host_frame">
                        <div className="user_avatar_frame_container">
                            <Image src="/icons/host.png" alt="Host Crown" className="crown" layout="intrinsic" width={30} height={30} />
                            <div className="user_avatar_frame"></div>
                            <p>Host</p>
                        </div>
                    </div>
                </div>



                {!hostready ? (
                    <div className="play_game_content">
                        <div>
                            <p>50 cards</p>
                            <Image src="/first_deck/back.png" alt="first deck" width={160} height={218} className="playin_deck" />
                            <p>The first Deck</p>
                            <p>(Current only avalible)</p>
                        </div>

                    </div>
                ) : (
                    <div className="play_game_content">
                        <h3>Game Code</h3>
                        <h1>55555</h1>
                    </div>
                )}

                <div className="play_bottom">
                    <div className="user_avatar_frame_container">
                        <div className="user_avatar_frame"></div>
                        <p>Host</p>
                    </div>


                    <div className="path_solution_button">

                        {!hostready ? (
                            <>
                                <button onClick={() => setHostReady(true)} >Host</button>
                                <div className="clickable" onClick={goBack}>
                                    <Image src="/icons/back.png" alt="back" width={40} height={40} />
                                    <p>Back</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <button>Play</button>
                                <div className="clickable hide" onClick={goBack}>
                                    <Image src="/icons/back.png" alt="back" width={40} height={40} />
                                    <p>Back</p>
                                </div>
                            </>
                        )}



                    </div>

                    <div className="points">
                        <span >0</span>
                        <p>points</p>
                    </div>
                </div>

            </section>
        </>
    )
}