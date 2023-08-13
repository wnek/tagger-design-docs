"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image";
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

                            <Link className={lastPage === 'philosophy' ? "selected" : ""} href="/philosophy">Overview</Link>



                            <Link className={lastPage === 'core-principles' ? "selected" : ""} href="/philosophy/core-principles">Core Principles</Link>
                            <Link className={lastPage === 'understand' ? "selected" : ""} href="/philosophy/understand">Understand</Link>
                            <Link className={lastPage === 'design' ? "selected" : ""} href="/philosophy/design">Design</Link>
                            <Link className={lastPage === 'verify' ? "selected" : ""} href="/philosophy/verify">Verify</Link>
                            <Link className={lastPage === 'implement' ? "selected" : ""} href="/philosophy/implement">Implement</Link>



                        </div>
                        {children}
                    </div>
                </div>)
            }


        </SmoothScrollbar >


    )
}