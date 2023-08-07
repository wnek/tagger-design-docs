"use client"

//Next.js
import { Metadata } from 'next'
import Link from 'next/link';


import { motion } from 'framer-motion';

import Hero from '../components/home/Hero';
import { SmoothScrollbar } from '@14islands/r3f-scroll-rig';
import { bind } from 'lodash';


export default function Page() {
    return <div className='body-container'>

        <SmoothScrollbar disablePointerOnScroll={false}>
            {(bind) => (<Hero />)}
        </SmoothScrollbar>

        <motion.div>
            <p className='label'>Tagger Design Nest</p>
            <h1>Shape Ideas into Reality</h1>
            <p>Dive into the vibrant world of Tagger's design philosophy, explore our meticulously crafted resources, and join us in our quest to push the boundaries of design.</p>

            <h2>Philosophy</h2>
            <p>TBD</p>
            <Link href={'philosophy'}>Learn more</Link>

            <h2>Design Language</h2>
            <p>TBD</p>
            <Link href={'design-language'}>Learn more</Link>

            <h2>Fenix Design System</h2>
            <p>TBD</p>
            <Link href={'fenix-design-system'}>Learn more</Link>

            <h2>Tagger Labs</h2>
            <p>TBD</p>
            <Link href={'tagger-labs'}>Learn more</Link>


        </motion.div>
    </div>
}