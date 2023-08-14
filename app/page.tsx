"use client"

//Next.js
import { Metadata } from 'next'
import Link from 'next/link';


import { motion } from 'framer-motion';

import Hero from '../components/home/Hero';
import Modular from '../components/home/Modular';

import { SmoothScrollbar } from '@14islands/r3f-scroll-rig';
import { bind } from 'lodash';


export default function Page() {
    return (

        <SmoothScrollbar disablePointerOnScroll={false}>
            {(bind) => (<div className='body-container'>
                <Hero />
                <motion.div>
                    <section className='motto_wrapper grid_wrapper'>
                        <div className='motto_content'>
                            <h2><span className='white-text-color'>Dive into the vibrant world of Tagger's design philosophy</span>, explore our meticulously crafted resources, and join us in our quest to push the boundaries of design.
                            </h2>
                            <h2>
                                And don't forget to have some fun along the way; the world is serious enough already.
                            </h2>
                        </div>
                    </section>

                    <section className='philosophy_wrapper'>
                        <div className='grid_wrapper'>
                            <div className='philosophy_content'>
                                <h2 className='white-text-color'>Philosophy</h2>
                                <p>Where understanding meets design, verification, and implementation in a seamless journey towards effective solutions.</p>
                                <Link href={'philosophy'}>Learn more</Link>
                            </div>
                        </div>
                        <div className='areas'>
                            <div><p>Core principles</p></div>
                            <div><p>Four phases of design</p></div>
                            <div><p>Hypothesis-driven design</p></div>
                        </div>
                    </section>

                    <section className='design-language_wrapper'>
                        <div className='grid_wrapper'>
                            <div className='design-language_content'>
                                <h2>Design Language</h2>
                                <p>TBD</p>
                                <Link href={'design-language'}>Learn more</Link>
                            </div>

                        </div>
                        <div className='areas'>
                            <div><p>Core principles</p></div>

                            <Modular />

                            <div><p>Hypothesis-driven design</p></div>
                        </div>
                    </section>

                    <section className='design-system_wrapper'>
                        <div className='grid_wrapper'>
                            <div className='design-system_content'>
                                <h2>Fenix Design System</h2>
                                <p>TBD</p>
                                <Link href={'fenix-design-system'}>Learn more</Link>
                            </div>

                        </div>
                        <div className='areas'>
                            <div><p>Core principles</p></div>
                            <div><p>Four phases of design</p></div>
                            <div><p>Hypothesis-driven design</p></div>
                        </div>
                    </section>

                    <section className='tagger-labs_wrapper'>
                        <div className='grid_wrapper'>
                            <div className='tagger-labs_content'>
                                <h2>Tagger Labs</h2>
                                <p>TBD</p>
                                <Link href={'tagger-labs'}>Learn more</Link>
                            </div>

                        </div>
                        <div className='areas'>
                            <div><p>Core principles</p></div>
                            <div><p>Four phases of design</p></div>
                            <div><p>Hypothesis-driven design</p></div>
                        </div>
                    </section>




                </motion.div>
            </div >)}
        </SmoothScrollbar>
    )


}