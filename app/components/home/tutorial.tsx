export default function Tutorial() {
    return (
        <section id="tutorial">
            <div className="page_content">

                <div className="da_rules_frame_wrapper">
                    <svg className="da_rules_frame_border" viewBox="0 0 420 520" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#5A514C" />
                                <stop offset="15%" stopColor="#A89C8C" />
                                <stop offset="35%" stopColor="#D9C4A4" />
                                <stop offset="50%" stopColor="#F3E7C8" />
                                <stop offset="65%" stopColor="#D9C4A4" />
                                <stop offset="85%" stopColor="#A89C8C" />
                                <stop offset="100%" stopColor="#5A514C" />
                            </linearGradient>
                        </defs>
                        <polygon points="0,50 25,0 395,0 420,50 420,420 210,520 0,420"
                            stroke="url(#goldGradient)" strokeWidth="4" fill="none" />
                    </svg>


                    <div className="da_rules_frame">
                        <h2>Da Rules</h2>
                        <h3>Setup the Game</h3>
                        <ul>
                            <li>Put the deck where everyone can reach it.</li>
                            <li>Each player takes turns drawing a card and completing the task. If that&apos;s too complex, you might need more practice at life.</li>
                        </ul>
                        <h3>Completing Tasks</h3>
                        <ul>
                            <li>Complete the task and place the card in the relevant point pile. (The individual card will explain what pile is the relevant one)</li>
                            <li>If you draw a card that&apos;s not fun, just drink and toss it in the discard pile. No fun? No problem. For now.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
