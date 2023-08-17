import React from 'react'

export default function UserBlock() {
    return (
        <article>
            <h1>User Block</h1>
            <br/>

            <p>A user block refers to a distinct and encapsulated section that presents information about a specific
                user. It typically includes the user's profile picture, name or handle, platform icon and a sub-line
                with additional details.<strong></strong></p>

            <h2>Anatomy</h2>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/user-block/user-block-anatomy.png"/></figure>

            <p className='component-property-desc'><strong><code>Name or Handle</code></strong> - displays the creator's
                name or username.</p>

            <p className='component-property-desc'><strong><code>Sub-line</code></strong> - offers context-specific
                information, assisting users in
                understanding the creator's platform, campaign affiliation, or content category.</p>

            <p className='component-property-desc'><strong><code>Avatar</code></strong> - provides a visual
                representation of the creator, sourced
                directly from their platform.</p>

            < br/>
            <h2>Sizes</h2>

            <p>User Block is available in three size variants: <strong><code>lg</code></strong>, <strong><code>md</code></strong>,
                and <strong><code>sm</code></strong>. These sizes
                primarily affect the avatar's dimension, as well as the font size of headers and sub-lines</p>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/user-block/user-block-variants.png"/></figure>
            <br/>

            <h2>Layout and Spacings</h2>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/user-block/user-block-layout.png"/></figure>
            <br/>

            <h2>Example from the platform</h2>
            <p>An example of User Block component in Creators list in Campaign.</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/user-block/user-block-example.png"/></figure>

        </article>
    )
}
