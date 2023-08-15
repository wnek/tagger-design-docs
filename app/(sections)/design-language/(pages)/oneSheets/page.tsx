import Link from 'next/link'
import React from 'react'

export default function Badge() {
    return (
        <article>
            <h1>One Sheets</h1>

            <br/>

            <p>One Sheets showcases a captivating color palette enchanting turquoise tones. Turquoise, a unique blend of
                blue and green, embodies balance, harmony, and creativity.</p>

            <h2>The Psychology of Turquoise</h2>

            <p>Turquoise, as a blend of blue and green, harmoniously combines the qualities of both colors. Blue is
                associated with trust, reliability, and professionalism, while green symbolizes growth, freshness, and
                creativity. By intertwining these attributes, turquoise creates a color palette that reflects a balanced
                and creative approach to designing One Sheets. This fusion symbolizes a platform that encourages
                influencers and marketers to present comprehensive yet visually captivating summaries.</p>

            <h3>Fostering Creativity</h3>

            <p>Turquoise plays a vital role in cultivating creative thinking. As a color associated with innovation and
                originality, turquoise inspires users to think outside the box and experiment with new ideas. Studies
                have shown that turquoise can stimulate creativity and problem-solving skills. By incorporating
                turquoise in the one-sheet creation process, the platform encourages users to unleash their creativity
                and design compelling summaries that capture the essence in unique and captivating ways.</p>

            <h3>Expressing Freshness and Vitality</h3>

            <p>Turquoise, reminiscent of the vibrant hues found in nature, radiates freshness and vitality. Its
                invigorating qualities can infuse one sheets with a sense of energy and vibrancy. Research has indicated
                that turquoise is associated with feelings of renewal and optimism. Through the use of turquoise, the
                platform emphasizes its commitment to providing users with a fresh and engaging creative space,
                inspiring them to produce summaries.</p>

            <h2>The Color Palette</h2>
            <figure><img style={{margin: '0 0 3rem 0'}} src="/img/pages/design-language/18.png"/></figure>
            <ol type="1" key="1">
                <li>base<strong>#3D9995</strong> shadow <strong>#194851</strong></li>
                <li>base<strong>#8EC9C7</strong> shadow <strong>#2B818F</strong></li>
                <li>base<strong>#D9FFFE</strong> shadow <strong>#7EBDD8</strong></li>
            </ol>

            <hr/>
            <br/>
            <h3 className="gray-link">
                <Link href="https://drive.google.com/drive/folders/1YEc_WIBfjzFcOvC4jIYMNSIXewh97GoU?usp=sharing">Library
                    of
                    Illustrations for One Sheets</Link>
            </h3>
        </article>
    )
}
