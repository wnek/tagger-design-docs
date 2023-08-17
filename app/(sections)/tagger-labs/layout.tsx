"use client"

import {usePathname} from "next/navigation"
import Link from "next/link"
import {SmoothScrollbar} from '@14islands/r3f-scroll-rig';
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
                    <Logo/>
                    <div className="subpage_content">
                        <div className="side-nav">

                            <Link className={lastPage === 'about' ? "selected" : ""}
                                  href="/tagger-labs/about">About</Link>
                            <Link className={lastPage === 'experiments' ? "selected" : ""}
                                  href="/tagger-labs/experiments">Experiments</Link>

                        </div>
                        {children}
                    </div>
                </div>)
            }


        </SmoothScrollbar>


    )
}
