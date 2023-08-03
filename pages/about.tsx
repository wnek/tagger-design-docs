import * as React from 'react';

import { ExtendedRecordMap } from 'notion-types';

import { NotionPage } from '../components/NotionPage';
import { rootNotionPageId } from '../lib/config';
import notion from '../lib/notion';

export const getStaticProps = async (context) => {
    const pageId = '3021674f-0289-4c5c-82ed-64018ac71500';
    const recordMap = await notion.getPage(pageId);

    return {
        props: {
            recordMap,
            pageId
        },
        revalidate: 10,
    };
};


export default function Page({ recordMap, pageId }: { recordMap: ExtendedRecordMap, pageId: string }) {
    return (
        <>
            <h1>About</h1>
            <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} id={pageId} />
        </>
    );
}
