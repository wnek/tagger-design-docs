import * as React from 'react';
import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from '../lib/react-notion-x/src/index';


import Head from 'next/head';
import { MenuWithSearch } from './MenuWithSearch';

export const NotionPage = ({
    recordMap,
    rootPageId,
    id
}: {
    recordMap: ExtendedRecordMap;
    rootPageId: string,
    id: string,
}) => {
    if (!recordMap) {
        return null;
    }
    const title = getPageTitle(recordMap);

    return (
        <>

            <Head>
                <meta name="description" content="React Notion X Minimal Demo" />

                <title>{title}</title>
            </Head>


            <NotionRenderer
                recordMap={recordMap}
                fullPage={true}
                darkMode={false}
                rootPageId={rootPageId}
            />

        </>
    );
};
