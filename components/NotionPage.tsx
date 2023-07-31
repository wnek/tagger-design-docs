import * as React from 'react';
import {ExtendedRecordMap} from 'notion-types';
import {getPageTitle} from 'notion-utils';
import {NotionRenderer} from '../lib/react-notion-x/src/index';
import {Menu} from './Menu';

import {motion, useScroll} from 'framer-motion';
import Head from 'next/head';
import {rootNotionPageId} from '../lib/config';

export const NotionPage = ({
                               recordMap,
                               rootPageId,
                               pages
                           }: {
    recordMap: ExtendedRecordMap;
    rootPageId?: string;
    pages?: any[]
}) => {
    if (!recordMap) {
        return null;
    }
    const title = getPageTitle(recordMap);

    return (
        <>
            <Menu pages={pages} recordMap={recordMap} rootOnly={false} id={rootNotionPageId}/>
            <Head>
                <meta name="description" content="React Notion X Minimal Demo"/>

                <title>{title}</title>
            </Head>
            <ProgressBar/>
            <NotionRenderer
                recordMap={recordMap}
                fullPage={true}
                darkMode={false}
                rootPageId={rootPageId}
            />
        </>
    );
};

function ProgressBar() {
    const {scrollYProgress} = useScroll();

    return (
        <motion.div
            initial={false}
            style={{scaleX: scrollYProgress}}
            className="progress-bar"
        />
    );
}
