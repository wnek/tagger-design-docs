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
            <Link href="/fenix-design-system/typography">Typography</Link>
            <Link href="/fenix-design-system/design">Design</Link>
            <Link href="/fenix-design-system/verfiy">Verify</Link>
            <Link href="/fenix-design-system/implement">Implement</Link>
            {children}
        </div>



    )
}