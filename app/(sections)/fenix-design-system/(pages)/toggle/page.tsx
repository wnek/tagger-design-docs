import React from 'react'
import {CheckboxLayoutSVG} from './svg-components/checkbox-layout'
import {RadioLayoutSVG} from './svg-components/radio-layout'
import {SwitchVariantsSVG} from './svg-components/switch-layout'
import {TogglesSVG} from './svg-components/toggles-banner'

export default function Toggle() {
    return (
        <article>
            <h1>Toggle</h1>
            <br/>
            <p>Toggles refer to interactive elements that allow users to switch between two
                states, typically representing an on/off or enabled/disabled condition. Toggles are commonly used to
                control settings, options, or features within an application or a system.</p>

            <TogglesSVG/>


            <br/>
            <br/>
            <h2>Switch Component</h2>
            <p>Switches offer users a binary choice, such as turning an option on or off. Our switches are available
                in
                three states: <strong>Checked</strong> (On), <strong>Unchecked</strong> (Off),
                and <strong>Disabled</strong>
            </p>

            <SwitchVariantsSVG/>
            <br/>


            <p className='component-property-desc'><strong><code>Checked (On)</code></strong>: The feature or option the
                switch represents is enabled.</p>
            <p className='component-property-desc'><strong><code>Unchecked (Off) </code></strong>: The feature or option
                the switch represents is disabled.
            </p>
            <p className='component-property-desc'><strong><code>Disabled</code></strong>: The switch is currently not
                available for toggling.</p>

            <p>Switches should be used sparingly, and only for system statuses or features that require immediate
                activation or deactivation.</p>

            <p className='callout'>Remember, the use of these components should align with the standards of
                accessibility, and the state of
                each should be clear and understandable to all users.</p>
            <br/>

            <h2>Checkbox</h2>

            <p>Checkboxes are a UI elements that allow users to make multiple selections from a set of options. Our
                design system provides checkboxes in three
                states: <strong><code>Checked</code></strong>, <strong><code>Unchecked</code></strong>,
                and <strong><code>Disabled</code></strong>, with an
                additional <strong><code>Intermediate</code></strong> state exclusively for checkboxes:</p>

            <CheckboxLayoutSVG/>

            <br/>

            <p className='component-property-desc'><strong><code>Checked</code></strong>: This state indicates that the
                user has selected the option.</p>
            <p className='component-property-desc'><strong><code>Unchecked</code></strong>: The default state,
                indicating no selection.</p>
            <p className='component-property-desc'><strong><code>Disabled</code></strong>: This state signifies that the
                option is present but not available
                for selection.</p>
            <p className='component-property-desc'><strong><code>Intermediate</code></strong>: This is a special state
                used mainly for parent checkboxes
                with several child
                checkboxes. When some, but not all, child checkboxes are checked, the parent checkbox will display
                an intermediate state.</p>

            <p className='callout'>When utilizing checkboxes, ensure that each checkbox corresponds to an independent
                option - the
                selection or deselection of one checkbox shouldn't affect the others.</p>
            <br/>

            <h2>Radio Button</h2>

            <p>Radio buttons let users select exactly one option from a collection. Our radio buttons come in three
                states: <strong><code>Checked</code></strong>, <strong><code>Unchecked</code></strong>,
                and <strong><code>Disabled</code></strong></p>

            <RadioLayoutSVG/>

            <br/>

            <p className='component-property-desc'><strong><code>Checked</code></strong>: This state signals that the
                option has been chosen.</p>
            <p className='component-property-desc'><strong><code>Unchecked</code></strong>: The default state, meaning
                no selection.</p>
            <p className='component-property-desc'><strong><code>Disabled</code></strong>: This option is currently not
                available for selection.</p>

            <p className='callout'>When you use radio buttons, it's important to group them by related options. Only one
                radio button
                in a group can be selected at a time.</p>
            <br/>

            <h2>Example from the platform</h2>
            <p>An example of checkboxes in Costs & Fees modal in Campaign.</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/toggles/toggles-example.png"/></figure>
        </article>
    )
}
