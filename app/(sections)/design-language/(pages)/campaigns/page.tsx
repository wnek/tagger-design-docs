import Link from 'next/link'
import React from 'react'

export default function Badge() {
    return (
        <article>
            <h1>Campaigns</h1>

            <br/>
            <p>In the realm of design, color holds a remarkable ability to influence our emotions and perceptions. When
                it comes to the Campaigns section, a deliberate choice has been made to incorporate purple tones into
                its color palette. Purple, a hue associated with creativity and ambition, has been strategically
                selected to convey a sense of innovation and strategic thinking within the platform.</p>

            <h2>The Psychology of Purple</h2>

            <p>Purple, situated between the warm tones of red and the cool tones of blue, embodies a unique and
                captivating character. Numerous studies have suggested that purple elicits feelings of creativity,
                inspiration, and individuality. It stimulates the imagination, making it an ideal choice for a platform
                that seeks to empower users in their influencer marketing endeavors.</p>

            <h3>Evoking Innovation and Strategic Thinking</h3>

            <p>The Campaigns section of Tagger serves as a space where users can devise strategic plans for their their
                campaigns. Purple, with its inherent association with creativity, aligns perfectly with the platform's
                objectives. By incorporating purple tones into the Campaigns section, the platform communicates its
                commitment to offering cutting-edge and inventive solutions to its users. It ignites a sense of
                inspiration and prompts users to think outside the box, enabling them to stand out in the competitive
                influencer marketing landscape.</p>

            <h3>Appeal to Users Seeking Impact</h3>

            <p>In the influencer marketing industry, standing out and making a lasting impact is a primary objective.
                Purple, with its unique allure, resonates strongly with users who strive to differentiate themselves and
                leave a lasting impression on their target audience. The color's association with ambition and
                individuality reinforces the platform's promise to empower users in their pursuit of success. By
                choosing purple for the Campaigns section, the platform not only visually captivates its users but also
                speaks directly to their aspirations and goals.</p>

            <h2>The Color Palette</h2>

            <figure><img style={{margin: '3rem auto', maxWidth: '60rem'}} src="/img/pages/design-language/19.png"/></figure>
            <ol type="1" key="1">
                <li>base<strong>#C37DE9</strong> shadow <strong>#484753</strong></li>
                <li>base<strong>#B4ADF2</strong> shadow <strong>#54575D</strong></li>
                <li>base<strong>#CCA9F7</strong> shadow <strong>#984FCB</strong></li>
            </ol>
            <p>It is allowed to add suplement colors to the base palette if needed.</p>

            <hr/>
            <br/>
            <h3 className="gray-link">
                <Link href="https://drive.google.com/drive/folders/1zLpJHlzsotfb0FRb9g2elejgdRklEY-J?usp=sharing">Library
                    of
                    Illustrations for Campaigns</Link>
            </h3>
        </article>
    )
}
