import React from 'react'
import Link from 'next/link'


export default function DesignPhases() {
    return (
        <article><h1>Design Phases</h1>
            <h3>Understanding the Phases of Our Data-Driven Design Process</h3>
            <p>The significance of having a structured, systematic approach to design cannot be overstated, especially in a world that constantly demands innovation. Our data-driven design process leans on four foundational pillars: Understand, Design, Verify, and Implement. Let's explore each one in detail.</p>

            <ul>
                <li><Link href="/philosophy/understand">Phase 1: Understand</Link></li>
                <li><Link href="/philosophy/design">Phase 2: Design</Link></li>
                <li><Link href="/philosophy/verify">Phase 3: Verfiy</Link></li>
                <li><Link href="/philosophy/implement">Phase 4: Implement</Link></li>
            </ul>
            <h3>Conclusion</h3>
            <p>The interconnectedness of the Understand, Design, Verify, and Implement phases creates a cohesive, data-driven design framework. Each phase feeds into the next, leading to a product that is not only aesthetically pleasing but grounded in real-world effectiveness.</p>
            <h3>Additional Resources</h3>
            <ul>
                <li>Recommended Book: "Don’t Make Me Think" by Steve Krug</li>
                <li>Recommended Tool: Google Analytics, MixPanel</li>
                <li>Recommended Article: "The Importance of A/B Testing"</li></ul>

        </article>
    )
}
