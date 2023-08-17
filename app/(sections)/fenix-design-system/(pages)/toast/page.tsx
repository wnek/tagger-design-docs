import React from 'react'
import {ToastAnatomySVG} from './svg-components/toast-anatomy'
import {ToastLayoutSVG} from './svg-components/toast-layout'
import {ToastVariantsSVG} from './svg-components/toast_varints'

export default function Toast() {
    return (
        <article>
            <h1>Toast</h1>

            <br/>

            <p>Toast is a small, non-intrusive notification that appears on the screen to provide users with brief,
                important information or feedback.</p>

            <h2>Anatomy</h2>

            <ToastAnatomySVG/>

            <br/>

            <p className='component-property-desc'><strong><code>Toast message</code></strong> - to communicate action
                status, changes or important
                information as a result of some event.</p>

            <p className='component-property-desc'><strong><code>Action Button</code></strong> - button for action
                related to the toast message.</p>

            <p className='component-property-desc'><strong><code>Close Button</code></strong> - button for closing the
                toast.</p>
            <br/>

            <h2>Variants</h2>

            <ToastVariantsSVG/>
            <br/>

            <p style={{marginBottom: '8px'}}><strong><code>Information Toast</code></strong> - is used to provide users
                with non-critical and
                informative messages. It typically includes helpful tips, updates, or general information about the
                application's features or changes.</p>

            <p className='component-property-desc gray-text'><i>Example: "Your domain hes been updated."</i></p>

            <p style={{marginBottom: '8px'}}><strong><code>Warning Toast</code></strong> - is used to alert users about
                potential issues or situations
                that require their attention. It indicates non-critical problems or conditions that might affect their
                interaction with the application.</p>

            <p className='component-property-desc gray-text'><i>Example: "Your connection has expired. Update your
                Account
                Connection"</i></p>

            <p className='component-property-desc'><strong><code>Success Toast</code></strong> - is displayed when a
                user successfully completes an action
                or operation. It provides positive feedback to the user, confirming that their action was successful.
            </p>

            <p style={{marginBottom: '8px'}}><strong><code>Error Toast</code></strong> - is shown when a user encounters
                a critical problem or an
                error while using the application. It notifies users about issues that need immediate attention to
                resolve.</p>

            <p className='component-property-desc gray-text'><i>Example: "Failed to submit your form. Please check the
                required
                fields."</i></p>
            <br/>

            <h2>Layout and Spacings</h2>
            <ToastLayoutSVG/>

            <br/>
            <br/>

            <h2>Example from the platform</h2>
            <p>An example of success toast component displaying after enabling one of Tagger Integrations.</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/toast/toast-example.png"/></figure>
        </article>
    )
}
