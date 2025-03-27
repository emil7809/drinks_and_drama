import Image from "next/image"
import { useState } from "react"

export default function IsJoinerReady({ goBackToGameCode }: { goBackToGameCode: () => void }) {
    const [name, setName] = useState("user na");
    const [joinerIsReady, setJoinerIsReady] = useState(false);
    return (
        <>
            <section id="joiner_ready">
                <div className="playeres_avatars_container">
                    <div className="host_frame">
                        <div className="user_avatar_frame_container">
                            <Image src="/icons/host.png" alt="Host Crown" className="crown" layout="intrinsic" width={30} height={30} />
                            <div className="user_avatar_frame"></div>
                            <p>Host</p>
                        </div>
                    </div>
                    <div className="user_avatar_frame_container">
                        <div className="user_avatar_frame"></div>
                        <p>lålå</p>
                    </div>
                    <div className="user_avatar_frame_container">
                        <div className="user_avatar_frame"></div>
                        <p>{name}</p>
                    </div>
                    <div className="user_avatar_frame_container">
                        <div className="user_avatar_frame"></div>
                        <p>Joining</p>
                    </div>
                    <div className="user_avatar_frame_container">
                        <div className="user_avatar_frame"></div>
                        <p>Joining</p>
                    </div>
                </div>

                {!joinerIsReady ? (
                    <div className="play_game_content">
                        <div className="enter_name_container">
                            <form action="">
                                <div className="form-group">
                                    <p>Player name</p>
                                    <input type="text" maxLength={7} value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </form>
                            <div>
                                <button onClick={() => setJoinerIsReady(true)}>Ready?</button>
                                <div className="clickable" onClick={goBackToGameCode}>
                                    <Image src="/icons/back.png" alt="back" width={40} height={40} />
                                    <p>Back</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="play_game_content">
                        <h2>Waiting for Host
                            to start the Game</h2>
                    </div>
                )}



                <div className="play_bottom">
                    <div className="user_avatar_frame_container">
                        <div className="user_avatar_frame"></div>
                        <p>{name}</p>
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