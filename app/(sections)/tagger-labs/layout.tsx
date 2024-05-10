"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { SmoothScrollbar } from '@14islands/r3f-scroll-rig';
import Logo from "./../../../components/Logo"

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

                            <Link className={lastPage === 'about' ? "selected" : ""}
                                href="/tagger-labs/about">About</Link>
                            <p>Experiments</p>
                            <Link className={lastPage === 'trends' ? "selected" : ""}
                                href="/tagger-labs/trends">Signals - #Trends</Link>
                            <Link className={lastPage === 'workspaces' ? "selected" : ""}
                                href="/tagger-labs/workspaces">[PLG] Sharing and Workspaces</Link>
                            <Link className={lastPage === 'taggeru' ? "selected" : ""}
                                href="/tagger-labs/taggeru">TaggerU</Link>
                            <Link className={lastPage === 'smart-discovery' ? "selected" : ""}
                                href="/tagger-labs/smart-discovery">Smart Discovery</Link>

                        </div>
                        {children}
                    </div>
                </div>)
            }


        </SmoothScrollbar>


    )
}
