"use client"
import '../styles/main.css';
import { useRef } from 'react';

// Next.js
import { Metadata } from 'next'

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// R3F-Scroll-Rig
import { GlobalCanvas } from '@14islands/r3f-scroll-rig'


import styles from '../styles/abstracts/_variables.module.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { usePathname } from "next/navigation"
import Script from 'next/script'

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta',
    display: 'swap',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentPathname = usePathname();
    const eventSource = useRef()

    return (

        <html lang="en">
            <body className={currentPathname === '/' ? plusJakarta.className : plusJakarta.className + " subpage_body_wrapper"} >
                <div ref={eventSource} className="event-source">
                    <div className='body-container'>
                        <Navbar />
                        <GlobalCanvas shadows globalRender={true} scaleMultiplier={0.01} eventSource={eventSource} eventPrefix="client" style={{ pointerEvents: 'none' }} >
                        </GlobalCanvas>
                        {children}


                    </div>
                    <Footer />
                </div>
                <!-- Google tag (gtag.js) -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-2419GERZ2B"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-2419GERZ2B');
                </script>
            </body>
        </html >


    )
}