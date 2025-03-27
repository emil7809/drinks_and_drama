"use client";
import { usePathname } from "next/navigation";
import BottomNavbar from "./bottomnavbar";

export default function BottomWrapper() {
    const pathname = usePathname();
    const hide = pathname === "/play";

    return !hide ? <BottomNavbar /> : null;
}
