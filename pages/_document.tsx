import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { motion, useScroll } from 'framer-motion';
import Navbar from '../components/Navbar';




export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <div className='body-container'>
                        <motion.div className="test">
                            <Navbar />
                            <div className='notion-container'>
                                <Main />
                                <NextScript />
                            </div>
                        </motion.div>
                    </div>
                </body>
            </Html>
        );
    }
}


