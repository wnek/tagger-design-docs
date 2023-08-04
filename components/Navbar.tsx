'use client'
export default function Navbar() {

    return (
        <>

            <nav>
                <div className="nav_links_wrapper">
                    <div className='nav_links'>
                        <a className="selected" href={'../'}>Home</a>
                        <a href={'pages/getting-started'}>Getting Started</a>
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