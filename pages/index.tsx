import * as React from 'react';
import {getPageTitle} from 'notion-utils';

import {NotionPage} from '../components/NotionPage';
import {rootNotionPageId} from '../lib/config';
import notion from '../lib/notion';
import {getAllPages} from '../utils/getAllPages';


export const getStaticProps = async () => {
    const pageId = rootNotionPageId;
    const recordMap = await notion.getPage(pageId);
    const pages = await getAllPages(recordMap, rootNotionPageId);
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


export default function Page(props) {
    return (
        <>
            <NotionPage recordMap={props.recordMap} rootPageId={rootNotionPageId} pages={props.pages}/>;
        </>
    );
}
