"use client"
import Image from "next/image"

export default function HostOrJoin() {
    return (
        <>
            <section id="hostorjoin">
                <div className="page_content">
                    <h1 className="hidden">Drinks & Drama</h1>
                    <Image src="/full_logo.png" alt="Drinks & Drama full logo" className="full_logo" layout="intrinsic" width={600} height={300} />
                    <div className="host_button">
                        <Image src="/icons/host.png" alt="Host Crown" className="crown" layout="intrinsic" width={30} height={30} />
                        <button>Host</button>
                    </div>
                    <button>Join</button>
                </div>
            </section>
        </>
    )
}