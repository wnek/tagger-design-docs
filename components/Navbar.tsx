'use client'

import Link from "next/link"
export default function Navbar() {

    return (
        <>
            <nav>
                <div className="nav_links_wrapper">
                    <div className='nav_links'>
                        <Link className="selected" href={'../'}>Home</Link>
                        <Link href={'philosophy'}>Philosophy</Link>
                        <Link href={'design-language'}>Design Language</Link>
                        <Link href={'fenix-design-system'}>Fenix Design System</Link>
                        <Link href={'tagger-labs'}>Tagger Labs</Link>
                    </div>
                </div>
                <div className='nav_logo'>
                    <Link href={'../'}>
                        <img src={'./img/taggerLogo.svg'} />
                    </Link>
                </div>


            </nav>
        </>
    )

}