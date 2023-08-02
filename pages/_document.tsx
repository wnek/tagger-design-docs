import * as React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {motion} from 'framer-motion';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head/>

                <body>
                <motion.div className="test">
                    <Main/>
                    <NextScript/>
                </motion.div>
                </body>
            </Html>
        );
    }
}
