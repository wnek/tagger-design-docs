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
            {(bind) => (< div className="content-page">

                <div className="side-nav">
                    <Link href="/fenix-design-system/typography">Typography</Link>
                    <Link href="/fenix-design-system/design">Design</Link>
                    <Link href="/fenix-design-system/verfiy">Verify</Link>
                    <Link href="/fenix-design-system/implement">Implement</Link>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>)
            }


        </SmoothScrollbar >


    )
}