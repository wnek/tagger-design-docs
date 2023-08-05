import '../styles/main.css';

// Next.js
import { Metadata } from 'next'

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'My Page Title',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer /></body>

        </html>


    )
}