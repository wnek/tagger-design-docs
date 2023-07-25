import * as React from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useScroll, motion } from 'framer-motion';

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll);
  });

  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  return (
    <>
      <ReactLenis root>
        {/* <ProgressBar /> */}
        {/* <MyComponent /> */}
        <Component {...pageProps} />
      </ReactLenis>
    </>
  );
}

export default MyApp;

export const MyComponent = () => (
  <motion.div
    className="box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
);
