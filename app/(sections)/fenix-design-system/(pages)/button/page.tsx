import React from 'react'
import ButtonAnatomySVG from './svg-components/button-anatomy'
import ButtonAdditionalVarsSVG from './svg-components/button_additional_varints'
import ButtonLayoutSVG from './svg-components/button_layout'
import ButtonVariantsSVG from './svg-components/button_varints'

export default function Badge() {
    return (
        <article>
            <h1>Button</h1>
            <br/>

            <p><strong>Button</strong> is a graphical element that users can interact with to trigger an action or
                execute
                a command.</p>

            <h2>Anatomy</h2>

            <p>Button can consist of three elements: an Icon, a Label, and a Dropdown Indicator. The Button can take on
                any
                combination of these elements, though it must contain at least an Icon or a Label. Here is a detailed
                breakdown of its structure and usage: </p>

            <ButtonAnatomySVG/>
            <br/>

            <p className='component-property-desc'><strong><code>Icon</code></strong> - The Icon within a Button
                provides a visual cue to the user about
                the
                action they are about to perform. It enhances the user experience by making interactions more intuitive.
                Icons should be relevant to the action that the button performs.
            </p>

            <p className='component-property-desc'>
                <strong><code>Label</code></strong> - The Label serves to describe the button's action in text form. It
                should be clear, concise, and action-oriented. It also improves accessibility as it can be read by
                screen
                readers.
            </p>

            <p className='component-property-desc'>
                <strong><code>Dropdown</code></strong> - This is an optional component of a Button that can be used to
                display a list of actions that the user can choose from. This element is used when multiple related
                actions
                can be grouped under a single button.
            </p>
            <br/>

            <h2>Variants</h2>

            <p className='component-property-desc'><strong><code>Primary</code></strong> - This is the main call to
                action and should be used for the most
                important actions. It is generally more visually striking to draw the user's attention.</p>

            <p className='component-property-desc'><strong><code>Secondary</code></strong> - This is used for actions
                that are secondary or supplementary to
                the primary actions. This variant is typically less visually striking than the primary button.</p>

            <p className='component-property-desc'><strong><code>Plain</code></strong> - This is used for less important
                or less frequently used
                actions. It
                is the least visually striking variant and should be used sparingly to avoid confusion or visual
                clutter.</p>

            <p className='callout'>
                ☝ All the above button variations can be used in the "warning" version, which changes the button
                color
                to red. This variant is dedicated to exceptional cases, like performing dangerous irreversible
                actions.
            </p>

            <ButtonVariantsSVG/>
            <br/>
            <br/>

            <h2>Layout and Spacings</h2>

            <ButtonLayoutSVG/>


            <br/>
            <br/>
            <h2>Additional Variants</h2>

            <p>Those buttons dedicated to authenticating via social media platform styles differ from others and
                should
                meet the requirements of the brands they are related to.</p>

            <ButtonAdditionalVarsSVG/>

            <br/>
            <br/>
            <h2>Example from the platform</h2>
            <p>The example of button component usage as CTA's for exploring Tageer Signals, Campaigns and Discovery
                applications.</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/button/button-example.png"/></figure>
        </article>
    )
}
