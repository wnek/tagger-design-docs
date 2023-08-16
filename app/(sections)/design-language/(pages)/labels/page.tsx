import Link from 'next/link'
import React from 'react'

export default function Labels() {
    return (
        <article>
            <h1>Labels</h1>

            <br/>
            <p>Color is a powerful tool in design, capable of evoking emotions and influencing user behavior. Labels
                section incorporates a vibrant yellow color palette. Yellow, a hue associated with optimism, happiness,
                has been carefully chosen to enhance the user experience and facilitate content organization.</p>

            <h2>The Psychology of Yellow</h2>

            <p>Yellow is widely regarded as a color that radiates positivity, warmth, and joy. Research has shown that
                yellow stimulates feelings of happiness and optimism, making it an ideal choice for creating a positive
                user experience. It is also known to increase attention and draw the eye.</p>

            <h3>Fostering Positivity and Approachability</h3>

            <p>The yellow color palette chosen for the Labels section instills a sense of optimism and approachability
                within the platform. The bright and cheerful nature of yellow contributes to a positive user experience,
                helping users feel welcomed and engaged.</p>

            <h3>Enhancing Content Organization</h3>

            <p>Effective content organization is crucial in any platform, and the Labels section plays a vital role in
                categorizing and identifying information. Yellow is highly visible and contrasts well with other colors,
                making it an effective tool for ensuring key information stands out. Studies have shown that yellow is
                easily noticed and can enhance visual perception and legibility. By employing yellow for Labels, the
                platform enables users to quickly and efficiently identify, sort, and manage content, contributing to a
                more organized experience.</p>

            <h2>The Color Palette</h2>
            <figure><img style={{margin: '3rem auto', maxWidth: '60rem'}} src="/img/pages/design-language/14.png"/></figure>
            <ol type="1" key="1">
                <li>base<strong>#F4C453</strong> shadow <strong>#67656F</strong></li>
                <li>base<strong>#FCF2BC</strong> shadow <strong>#AA782A</strong></li>
                <li>base<strong>#F7D962</strong> shadow <strong>#DA8718</strong></li>
            </ol>
            <p>It is allowed to add suplement colors to the base palette if needed.</p>

            <hr/>
            <br/>
            <h3 className="gray-link">
                <Link href="https://drive.google.com/drive/folders/1uxTvOCB5AWqt7tYqSnoD1-6wkYL0aJ1e">Library of
                    Illustrations for Labels</Link>
            </h3>
        </article>
    )
}
