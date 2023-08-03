import * as React from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { motion, useScroll } from 'framer-motion';

// core styles shared by all of react-notion-x (required)
//import 'react-notion-x/src/styles.css';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {


    const { scrollYProgress } = useScroll();

    return (
        <>
            <ReactLenis root>
                <Component {...pageProps} />
            </ReactLenis>
        </>
    );
}

export default MyApp;


