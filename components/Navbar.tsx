'use client'

import Link from "next/link"
export default function Navbar() {

    return (
        <>

            <nav>
                <div className="nav_links_wrapper">
                    <div className='nav_links'>
                        <Link className="selected" href={'../'}>Home</Link>
                        <Link href={'getting-started'}>Getting Started</Link>
                        <a href={'../methodology'}>Methodology</a>
                        <a href={'../brand'}>Brand</a>
                        <a href={'../tagger-labs'}>Tagger Labs</a>
                    </div>
                </div>
                <div className='nav_logo'>
                    <a href={'../'}>
                        <img src={'./img/taggerLogo.svg'} />
                    </a>
                </div>
                <div className='help'><p>🛟Need help? <a href="mailto: mariusz@scalaric.com">Contact us</a></p></div>

            </nav>
        </>
    )

}