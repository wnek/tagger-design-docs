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

    const eventSource = useRef()

    return (

        <html lang="en">
            <body className={plusJakarta.className}>
                <div ref={eventSource} className="event-source">
                    <div className='body-container'>
                        <Navbar />
                        <GlobalCanvas shadows globalRender={false} scaleMultiplier={0.01} eventSource={eventSource} eventPrefix="client" style={{ pointerEvents: 'none' }}>

                        </GlobalCanvas>
                        {children}

                        <Footer />
                    </div>
                </div>
            </body>
        </html>


    )
}