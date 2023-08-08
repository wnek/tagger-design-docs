'use client'


import { useState } from 'react'

import { usePathname } from 'next/navigation'
import Link from "next/link"
import { is } from '@react-three/fiber/dist/declarations/src/core/utils'




export default function Navbar() {
    const currentPathname = usePathname()
    const currentPage = currentPathname.split('/')[1]

    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
        setIsOpened(!isOpened)
    }
    console.log(isOpened)

    return (
        <>
            <nav>
                <button className="nav_button" onClick={toggleMenu}>&times;</button>
                <div className={`nav_links_wrapper ${isOpened ? "is-opened" : ""} `}>

                    <div className={`nav_links ${isOpened ? "is-opened" : ""} `}>
                        <Link className={currentPathname === '/' ? "selected" : ""} href={'../'} onClick={toggleMenu}>Getting Started</Link>
                        <Link className={currentPage === 'philosophy' ? "selected" : ""} href={'/philosophy'} onClick={toggleMenu}>Philosophy</Link>
                        <Link className={currentPage === 'design-language' ? "selected" : ""} href={'/design-language'} onClick={toggleMenu}>Design Language</Link>
                        <Link className={currentPage === 'fenix-design-system' ? "selected" : ""} href={'/fenix-design-system'} onClick={toggleMenu}>Fenix Design System</Link>
                        <Link className={currentPage === 'tagger-labs' ? "selected" : ""} href={'/tagger-labs'} onClick={toggleMenu}>Tagger Labs</Link>
                    </div>



                </div>
            </nav>

        </>
    )

}