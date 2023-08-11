"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { SmoothScrollbar } from '@14islands/r3f-scroll-rig';


export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentPathname = usePathname()
    const lastPage = currentPathname.split('/').pop()

    return (
        <SmoothScrollbar disablePointerOnScroll={false}>
            {(bind) => (


                <div className="content-page">
                    <div className='logo'>
                        <Link href={'../'}>
                            <img src={'/img/tagger-logo-dark.svg'} />
                        </Link>
                    </div>
                    <h1>Tagger Labs</h1>
                    <div className="side-nav">
                        <Link className={lastPage === 'typography' ? "selected" : ""} href="/fenix-design-system/typography">Typography</Link>
                        <Link className={lastPage === 'color' ? "selected" : ""} href="/fenix-design-system/color">Color</Link>
                        <Link className={lastPage === 'badge' ? "selected" : ""} href="/fenix-design-system/badge">Badge</Link>
                        <Link className={lastPage === 'button' ? "selected" : ""} href="/fenix-design-system/button">Button</Link>
                        <Link className={lastPage === 'callout' ? "selected" : ""} href="/fenix-design-system/callout">Callout</Link>
                        <Link className={lastPage === 'card' ? "selected" : ""} href="/fenix-design-system/card">Card</Link>
                        <Link className={lastPage === 'grid' ? "selected" : ""} href="/fenix-design-system/grid">Grid</Link>
                        <Link className={lastPage === 'navigation' ? "selected" : ""} href="/fenix-design-system/navigation">Navigation</Link>
                        <Link className={lastPage === 'score-card' ? "selected" : ""} href="/fenix-design-system/score-card">Score Card</Link>
                        <Link className={lastPage === 'spacing' ? "selected" : ""} href="/fenix-design-system/spacing">Spacing</Link>
                        <Link className={lastPage === 'toast' ? "selected" : ""} href="/fenix-design-system/toast">Toast</Link>
                        <Link className={lastPage === 'toggle' ? "selected" : ""} href="/fenix-design-system/toggle">Toggle</Link>
                        <Link className={lastPage === 'user-block' ? "selected" : ""} href="/fenix-design-system/user-block">User Block</Link>
                    </div>

                    <div className="content">
                        {children}
                    </div>
                </div>)
            }


        </SmoothScrollbar >


    )
}