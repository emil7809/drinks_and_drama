"use client";
import { useState } from "react";
import HostOrJoin from "../components/play/hostorjoin"
import HostSetup from "../components/play/hostsetup"
import Joining from "../components/play/joining"

export default function Play() {
    const [choice, setChoice] = useState<"host" | "join" | null>(null);
    return (
        <>
            {!choice && <HostOrJoin onChoice={setChoice} />}
            {choice === "host" && <HostSetup goBack={() => setChoice(null)} />}
            {choice === "join" && <Joining goBack={() => setChoice(null)} />}
        </>
    )
}