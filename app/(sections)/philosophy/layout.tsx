"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentPathname = usePathname()
    const lastPage = currentPathname.split('/').pop()

    return (
        <div>
            <h1>Layout</h1>
            <Link href="/philosophy/understand">Understand</Link>
            <Link href="/philosophy/design">Design</Link>
            <Link href="/philosophy/verfiy">Verify</Link>
            <Link href="/philosophy/implement">Implement</Link>
            {children}
        </div>


    )
}