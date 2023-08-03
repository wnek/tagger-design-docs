export default function Navbar() {

    return (
        <>
            <div className="nav_links_wrapper">
                <div className='nav_links'>
                    <a href={'../getting-started'}>Getting Started</a>
                    <a href={'../methodology'}>Methodology</a>
                    <a href={'../brand'}>Brand</a>
                    <a href={'../tagger-labs'}>Tagger Labs</a>
                </div>
            </div>
            <nav>
                <div className='nav_logo'>
                    <a href={'../'}>
                        <img src={'./img/taggerLogo.svg'} />
                    </a>
                </div>

            </nav>
        </>
    )

}