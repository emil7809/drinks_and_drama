"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BottomNav = () => {
    const pathname = usePathname(); // Get the current path

    return (
        <nav className="bottom-nav">
            <ul>
                <li>
                    <Link href="/" className={pathname === "/" ? "active" : ""}>
                        <Image src="/icons/home.png" alt="Home" width={40} height={40} />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/cards" className={pathname === "/cards" ? "active" : ""}>
                        <Image src="/icons/cards.png" alt="Cards" width={40} height={40} />
                        <span>Cards</span>
                    </Link>
                </li>
                <li>
                    <Link href="/community" className={pathname === "/community" ? "active" : ""}>
                        <Image src="/icons/community.png" alt="Community" width={40} height={40} />
                        <span>Community</span>
                    </Link>
                </li>
                <li>
                    <Link href="/shop" className={pathname === "/shop" ? "active" : ""}>
                        <Image src="/icons/shop.png" alt="Shop" width={40} height={40} />
                        <span>Shop</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default BottomNav;
