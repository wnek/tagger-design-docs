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
            <section className='motto'>
                <h2><span className='white-text-color'>Dive into the vibrant world of Tagger's design philosophy</span>, explore our meticulously crafted resources, and join us in our quest to push the boundaries of design.
                </h2>
                <h2>
                    And don't forget to have some fun along the way; the world is serious enough already.
                </h2>
            </section>

            <section className='philosophy'>
                <h2>Philosophy</h2>
                <p>Where understanding meets design, verification, and implementation in a seamless journey towards effective solutions.</p>
                <Link href={'philosophy'}>Learn more</Link>
                <div className='areas'>
                    <div><p>Core principles</p></div>
                    <div><p>Four phases of design</p></div>
                    <div><p>Hypothesis-driven design</p></div>
                </div>
            </section>

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
    </div >
}