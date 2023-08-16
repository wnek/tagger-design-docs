import React from 'react'
import CalloutAnatomySVG from './svg-components/callout-anatomy'
import CalloutLayoutSVG from './svg-components/callout_layout'
import CalloutVariantsSVG from './svg-components/callout_varints'

export default function Callout() {
    return (
        <article>
            <h1>Callout</h1>
            <br/>
            <p>The Callout component is a distinctive section of our user interface designed to draw attention to
                specific content or to convey crucial information.</p>

            <h2>Anatomy</h2>

            <CalloutAnatomySVG/>
            <br/>

            <p><strong>Icon</strong> - gives users an immediate visual hint, establishing the context or emotion of the
                Callout. It
                should complement the message being conveyed.</p>

            <p><strong>Header</strong> - a brief and impactful statement that grabs attention, working in tandem with
                the icon to set
                the tone or context.</p>

            <p><strong>Description (Mandatory)</strong> - offers detailed information or guidance and should be clear,
                concise, and
                comprehensible.</p>

            <h2>Variants</h2>

            <CalloutVariantsSVG/>

            <br/>

            <p><strong>Secondary</strong> - rhis variant is designed to be adaptive, taking on the secondary color
                palette of the
                section it's placed in. It's versatile and should be used to ensure the Callout feels integrated within
                its surroundings.</p>

            <p><strong>Ocean</strong> - a versatile shade that can be harmoniously incorporated into a variety of
                sections for a
                calming and cohesive feel.</p>

            <p><strong>White</strong> - a neutral hue ideal for sections with colored backgrounds, offering a clean,
                crisp appearance
                without overpowering the content.</p>

            <p><strong>Gray</strong> - a subtle and understated variant that complements most designs, ensuring the
                message stands out
                without being visually intrusive.</p>

            <p><strong>Yellow (Alert)</strong> - reserved exclusively for vital messages and warnings, this color
                demands attention.
                Use it sparingly and only when it's crucial to capture the user's immediate focus.</p>

            <h2>Usage</h2>

            <p><strong>Combination Variants</strong> - You can creatively combine the Icon, Header, and Description to
                craft different
                Callout appearances. For instance, an Icon and Description combo might be suited for visually-driven
                messages, while a Header and Description combination might be more apt for text-heavy content. However,
                regardless of the combination, the Description is always present.</p>

            <p><strong>Consistency</strong> - When using icons or headers, ensure consistency across different Callouts.
                This aids in
                better user recognition and understanding.</p>

            <p><strong>Placement</strong> - Position the Callout in a location where its message will be most impactful,
                typically at the
                top of a page or section, or immediately after an action trigger.</p>

            <p><strong>Tone and Clarity</strong> - Ensure the tone of the Callout aligns with the seriousness or
                casualness of the
                message. The description should always be clear and free of jargon.
            </p>
            <h2>Layout and Spacings</h2>
            <CalloutLayoutSVG/>

            <h2>Example from the platform</h2>
            <p>The example of callout component usage with an information about implementing Affiliate
                functionality.</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/callout/callout-example.png"/></figure>

        </article>
    )
}
