import '../styles/main.css';
import { Metadata } from 'next'
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
    title: 'My Page Title',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <html lang="en">
            <body>
                <Navbar />
                {children}</body>

        </html>


    )
}