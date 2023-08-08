'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function Navbar() {
    const currentPathname = usePathname()
    const currentPage = currentPathname.split('/')[1]

    return (
        <>
            <nav>
                <div className="nav_links_wrapper">
                    <div className='nav_links'>
                        <Link className={currentPathname === '/' ? "selected" : ""} href={'../'}>Getting Started</Link>
                        <Link className={currentPage === 'philosophy' ? "selected" : ""} href={'/philosophy'}>Philosophy</Link>
                        <Link className={currentPage === 'design-language' ? "selected" : ""} href={'/design-language'}>Design Language</Link>
                        <Link className={currentPage === 'fenix-design-system' ? "selected" : ""} href={'/fenix-design-system'}>Fenix Design System</Link>
                        <Link className={currentPage === 'tagger-labs' ? "selected" : ""} href={'/tagger-labs'}>Tagger Labs</Link>
                    </div>
                </div>
            </nav>

        </>
    )

}