import * as React from 'react';

import {ExtendedRecordMap} from 'notion-types';

import {NotionPage} from '../components/NotionPage';
import {rootNotionPageId} from '../lib/config';
import notion from '../lib/notion';
import {getAllPages} from '../utils/getAllPages';
import {getPageTitle} from 'notion-utils';

export const getStaticProps = async (context) => {
    const pageId = (context.params.pageId as string) || rootNotionPageId;
    const recordMap = await notion.getPage(pageId);
    const record = await notion.getPage(rootNotionPageId);
    const pages = await getAllPages(record, rootNotionPageId, pageId);
    const title = await getPageTitle(recordMap);

    return {
        props: {
            recordMap,
            pages,
            title
        },
        revalidate: 10,
    };
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}

export default function Page({recordMap, pages}: { recordMap: ExtendedRecordMap, pages: any[] }) {
    return (
        <>
            <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} pages={pages}/>
        </>
    );
}
