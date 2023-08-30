"use client"

//Next.js
import { Metadata } from 'next'
import Link from 'next/link';


import { motion } from 'framer-motion';

import Hero from '../components/home/Hero';
import Modular from '../components/home/Modular';

import { SmoothScrollbar } from '@14islands/r3f-scroll-rig';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });


export default function Page() {
    return (

        <SmoothScrollbar disablePointerOnScroll={false} config={{ syncTouch: true, touchInertiaMultiplier: 15 }}>
            {(bind) => (<div className='body-container'>

                <Hero />

                <section className='motto_wrapper'>
                    <div className='grid_wrapper'>
                        <div className='motto_content'>
                            <h2><span className='white-text-color'>Dive into the vibrant world of Tagger's design philosophy</span>, explore our meticulously crafted resources, and join us in our quest to push the boundaries of design.
                            </h2>
                            <h2>
                                And don't forget to have some fun along the way; the world is serious enough already.
                            </h2>
                        </div>
                    </div>
                </section>

                <section className='philosophy_wrapper'>
                    <div className='grid_wrapper'>
                        <div className='philosophy_content'>
                            <h2 className='white-text-color'>Philosophy</h2>
                            <p>Where understanding meets design, verification, and implementation in a seamless journey towards effective solutions.</p>

                        </div>
                    </div>
                    <div className='areas'>
                        <Link href="/philosophy/core-principles">
                            <div>
                                <h4>Core principles</h4>
                                <img src="/img/home/principles.svg" alt="Core principles" />
                            </div>
                        </Link>

                        <Link href="/philosophy/design-phases">
                            <div>
                                <h4>Four phases of design</h4>
                                <img src="/img/home/four-phases.svg" alt="Four phases of design" />
                            </div>
                        </Link>

                        <Link href="/philosophy/hypothesis-driven">
                            <div>
                                <h4>Hypothesis-driven design</h4>
                                <img src="/img/home/hypothesis-driven-design.svg" alt="Hypothesis-driven design" />
                            </div>
                        </Link>
                    </div>
                </section>

                <section className='design-language_wrapper'>

                    <div className='grid_wrapper'>
                        <div className='design-language_content'>
                            <h2>Design Language</h2>
                            <p>Our design language is not just about aesthetics, but about infusing your brand's ethos into every interaction, each campaign, every touchpoint.</p>
                        </div>
                    </div>

                    <div className='areas'>

                        <Link className='modular-brand-system' href="/design-language/labels">
                            <h4>Modular brand system</h4>
                            <img src="/img/home/modular-brand-system.png" alt="Modular brand system" />
                        </Link>

                        <Link className="illustrations" href="/design-language/illustrations">
                            <h4>Illustrations</h4><img src="/img/home/illustrations.png" alt="Illustrations" />
                        </Link>

                        <Link className="branding" href="/design-language/logotype">
                            <div><h4>Branding</h4><Modular /></div>
                            <div className='modular-background'></div>
                        </Link>

                    </div>
                </section>

                <section className='design-system_wrapper'>

                    <div className='design-system-img'>
                        <img src="/img/home/fenix-design-system.svg" alt="Design system" />
                    </div>

                    <div className='grid_wrapper'>
                        <div className='design-system_content'>

                            <p>The Fenix design system is the essence of our platform's visual language. It comprises an exhaustive set of guidelines for creating cohesive and scalable interfaces, maintaining visual and functional consistency across all touchpoints.</p>
                            <div className='areas'>
                                <Link href="/fenix-design-system"><p>Foundations</p>
                                    <img src="/img/home/arrow-right.svg" alt="Arrow right" />
                                </Link>
                                <Link href="/fenix-design-system/color"><p>Styles</p><img src="/img/home/arrow-right.svg" alt="Arrow right" /></Link>
                                <Link href="/fenix-design-system/badge"><p>Components</p><img src="/img/home/arrow-right.svg" alt="Arrow right" /></Link>
                            </div>
                        </div>

                    </div>

                </section>

                <section className='tagger-labs_wrapper'>
                    <div className='grid_wrapper'>
                        <div className='tagger-labs_content'>
                            <img className="tagger-labs-logo" src="img/home/tagger-labs-logo.png" alt="Tagger Labs Logo" />
                            <p className='tagger-labs-paragraph'>Tagger Labs is a platform designed to empower users to discover and experience the latest experimental products and features, providing them with an exclusive glimpse into the future of technology.</p>
                            <img className='tagger-labs-text' src="img/home/tagger-labs-text.svg" alt="Tagger Labs" />
                        </div>

                    </div>
                    <div className='areas'>
                        <Link className="signals-trends" href="/tagger-labs/trends">
                            <h4>Signals - #Trends</h4>
                            <ReactPlayer url='/img/home/trends-background.mp4' controls={false}
                                playing={true} muted={true} loop={true} width="100%" height="auto" />
                        </Link>
                        <div className='second-row'>
                            <Link className="sharing" href="/tagger-labs/workspaces">
                                <h4>[PLG] Sharing and Workspaces</h4>
                                <img src="img/home/sharing.jpg" alt="Sharing" />
                            </Link>

                            <Link className="taggeru" href="/tagger-labs/taggeru">
                                <h4>TaggerU</h4>
                                <img src="img/home/taggeru.jpg" alt="TaggerU" />
                            </Link>
                        </div>



                        <Link className="smart-discovery" href="/tagger-labs/smart-discovery">
                            <h4>Smart Discovery</h4>
                            <img src="img/home/smart-discovery.jpg" alt="Smart Discovery" />
                        </Link>


                    </div>
                </section>





            </div >)}
        </SmoothScrollbar >
    )


}