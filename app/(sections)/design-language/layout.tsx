"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { SmoothScrollbar } from '@14islands/r3f-scroll-rig';
import Logo from "components/Logo";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentPathname = usePathname()
    const lastPage = currentPathname.split('/').pop()
    console.log(lastPage)

    return (
        <SmoothScrollbar disablePointerOnScroll={false}>
            {(bind) => (


                <div className="subpage">
                    <Logo />
                    <div className="subpage_content">
                        <div className="side-nav">

                            <Link className={lastPage === 'design-language' ? "selected" : ""}
                                href="/design-language">About</Link>

                            <p>Foundations</p>
                            <Link className={lastPage === 'logotype' ? "selected" : ""}
                                href="/design-language/logotype">Logotype</Link>
                            <Link className={lastPage === 'illustrations' ? "selected" : ""}
                                href="/design-language/illustrations">Illustrations</Link>

                            <p>Modular Brand System</p>
                            <Link className={lastPage === 'labels' ? "selected" : ""}
                                href="/design-language/labels">Labels</Link>
                            <Link className={lastPage === 'discovery' ? "selected" : ""}
                                href="/design-language/discovery">Discovery</Link>
                            <Link className={lastPage === 'taggerLabs' ? "selected" : ""}
                                href="/design-language/taggerLabs">Tagger Labs</Link>
                            <Link className={lastPage === 'campaigns' ? "selected" : ""}
                                href="/design-language/campaigns">Campaigns</Link>
                            <Link className={lastPage === 'signals' ? "selected" : ""}
                                href="/design-language/signals">Signals</Link>
                            <Link className={lastPage === 'oneSheets' ? "selected" : ""}
                                href="/design-language/oneSheets">One Sheets</Link>

                        </div>
                        {children}
                    </div>
                </div>)
            }


        </SmoothScrollbar>


    )
}
