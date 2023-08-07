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



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const eventSource = useRef()

    return (

        <html lang="en">
            <body>
                <div ref={eventSource} className="event-source">
                    <Navbar />
                    <GlobalCanvas scaleMultiplier={0.01} eventSource={eventSource} eventPrefix="client" style={{ pointerEvents: 'none' }}>
                        <ambientLight />
                    </GlobalCanvas>


                    {children}

                    <Footer />
                </div>
            </body>
        </html>


    )
}