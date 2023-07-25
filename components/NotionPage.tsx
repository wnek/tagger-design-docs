import * as React from 'react';
import Head from 'next/head';

import notion from '../lib/notion';
import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle, getAllPagesInSpace } from 'notion-utils';
import { NotionRenderer } from '../lib/react-notion-x/src/index';

import { motion, useScroll } from 'framer-motion';

export const NotionPage = ({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) => {
  if (!recordMap) {
    return null;
  }
  const title = getPageTitle(recordMap);

  // if (title === 'Branding') {
  //   console.log('This is branding page');
  // }

  // console.log(title, recordMap);

  return (
    <>
      <Head>
        <meta name="description" content="React Notion X Minimal Demo" />

        <title>{title}</title>
      </Head>
      <ProgressBar />
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
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={false}
      style={{ scaleX: scrollYProgress }}
      className="progress-bar"
    />
  );
}
