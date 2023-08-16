import React from 'react'

export default function Navigation() {
    return (
        <article>
            <h1>Navigation</h1>

            <h2>Top Nav-Bar</h2>

            <p>The <strong>top-nav-bar</strong> is a pivotal navigation component designed to guide users through
                different
                sections of the application and provide context about their current location. It is elegantly structured
                with up to three elements:</p>

            <h3>Anatomy</h3>

            <figure>
                <img style={{margin: '3rem auto'}} src="/img/pages/design-system/nav/top-bar-nav-anatomy.png"/>
            </figure>

            <p style={{marginBottom: '24px'}}><code>Breadcrumbs</code> - are a navigational aid that displays the user's
                current location within the
                application's hierarchy. It consists of links that reflect the path taken to reach the current page,
                typically starting from the home page and ending with the current page. Breadcrumbs help users
                understand
                their context within the application and allow for easy navigation back to previous levels.</p>

            <p style={{marginBottom: '24px'}}><code>Top-Bar-Text with Button</code> - this section may contain specific
                text related to the current section
                or page, providing additional context or guidance. A button may accompany this text, offering the user a
                clear call to action or a shortcut to a relevant task.</p>

            <p style={{marginBottom: '24px'}}><code>Buttons Group</code> - the button groups contain buttons that relate
                to the entire section, often
                representing major actions, shortcuts, or navigation options available to the user within the current
                context.</p>

            <br/>
            <h3>Layout and Spacings</h3>

            <figure>
                <img style={{margin: '3rem auto'}} src="/img/pages/design-system/nav/top-bar-nav-layout.png"/>
            </figure>

            <br/>
            <h2>Nav-page</h2>

            <p>The "nav-page-list-item" serves as an individual navigation link within the sidebar menu, guiding users
                to different sections or subpages within the application. It's a modular component that can be composed
                of just a label or paired with an icon for a more visual representation. Here's a detailed breakdown of
                the elements:</p>

            <h3>Anatomy</h3>

            <figure>
                <img style={{margin: '3rem auto'}} src="/img/pages/design-system/nav/nav-page-anatomy.png"/>
            </figure>

            <p style={{marginBottom: '24px'}}><code>Label</code> - provides a concise description of the destination
                page
                or section. It's the text that
                users will read to understand where the link will take them.</p>

            <p style={{marginBottom: '24px'}}><code>Icon</code> - can accompany the label to provide a visual cue or
                enhance recognition. Icons can make
                navigation more intuitive, especially when the sidebar contains multiple items.</p>

            <br/>
            <h3>Layout and Spacings</h3>

            <figure>
                <img style={{margin: '3rem auto'}} src="/img/pages/design-system/nav/nav-page-anatomy.png"/>
            </figure>

            <br/>
            <h2>Example from the platform</h2>
            <p>The example of thye main navigation on the platform.</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/nav/nav-example.png"/></figure>

        </article>

    )
}
