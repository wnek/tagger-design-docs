import * as React from 'react';

import {NotionPage} from '../components/NotionPage';
import {rootNotionPageId} from '../lib/config';
import notion from '../lib/notion';


export const getStaticProps = async () => {
    const pageId = rootNotionPageId;
    const recordMap = await notion.getPage(pageId);

    return {
        props: {
            recordMap
        },
        revalidate: 10,
    };
};


export default function Page(props) {
    return (
        <>
            <NotionPage recordMap={props.recordMap} rootPageId={rootNotionPageId} id={rootNotionPageId}/>;
        </>
    );
}
