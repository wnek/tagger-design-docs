import React from 'react'
import ScoreCardAnatomySVG from './svg-components/score-card-anatomy'
import ScoreCardLayoutSVG from './svg-components/score-card-layout'

export default function ScoreCard() {
    return (
        <article>
            <h1>Score Card</h1>
            <br/>

            <p>The "Score Card" is a component that allows quick and clear display of quantitative or comparative data.
                It includes three main elements:</p>

            <ScoreCardAnatomySVG/>
            <br/>

            <h2>Anatomy</h2>

            <p className='component-property-desc'><strong><code>Header</code></strong>: This can be in the form of
                plain text or text accompanied by an
                icon. The header usually
                provides context or labels the data being shown.</p>
            <p className='component-property-desc'><strong><code>Value</code></strong>: This is the key element of the
                Score Card. It presents the number or
                percentage that is of
                primary interest to the user. Optionally, it may be complemented with a badge that shows the difference
                between the current value and a reference value (for example, the same value from a week ago).</p>
            <p className='component-property-desc'><strong><code>Description</code></strong>: This section contains
                additional explanations about the value,
                providing more context or
                details as necessary.</p>
            <br/>

            <h2>Sizes</h2>
            <p>The Score Card can be used in two sizes:</p>

            <p className='component-property-desc'><strong><code>Default</code></strong>: This is the standard size and
                should suit most use cases.</p>
            <p className='component-property-desc'><strong><code>Small</code></strong> (sm)`: This is a more compact
                version that can be used in tighter
                spaces
                or when less emphasis is
                needed.</p>
            <br/>

            <h2>Variants</h2>

            <p className='component-property-desc'><strong><code>Default</code></strong>: The standard color scheme and
                should be used in most instances.
            </p>
            <p className='component-property-desc'><strong><code>Gray</code></strong>: This variant can be used when a
                less conspicuous presentation is
                desired, or to provide contrast
                when several score cards are presented together.</p>

            <p className='callout'>When using Score Cards, it's crucial to ensure that the provided information is
                concise and meaningful.
                Too much data or text can overwhelm users and reduce the component's efficacy. Furthermore, always be
                sure to maintain contrast and readability standards, particularly when presenting numerical data and any
                accompanying text.</p>
            <br/>

            <h2>Layout and Spacings</h2>

            <ScoreCardLayoutSVG/>

            <br/>
            <br/>
            <h2>Example from the platform</h2>
            <p>Score card components used in Signals Report.</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/score-card/score-card-example.png"/></figure>
        </article>
    )
}
