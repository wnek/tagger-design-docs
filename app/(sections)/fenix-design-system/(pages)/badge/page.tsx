import React from 'react'
import {BadgeAnatomySVG} from './svg-components/anatomy'
import {BadgeLayoutsSVG} from './svg-components/layout'
import {BadgeSizesSVG} from './svg-components/sizes'

export default function Badge() {
    return (
        <article>
            <h1>Badge</h1>

            <br/>

            <p>
                <strong>Badges</strong> are flexible visual components used to communicate various
                statuses or
                important pieces of information across multiple components such as campaigns, posts, or creators.
            </p>

            <h2>Anatomy</h2>

            <p>Badge can consist of three elements: <code>Left Icon</code>, <code>Label</code> and <code>Right
                Icon</code>.
                The Badge can take on
                any combination of these elements, though it must always contain a Label.</p>

            <BadgeAnatomySVG/>
            <br/>


            <h2>Sizes</h2>

            <p>
                Badge Component is offered in four different sizes to fit various interface needs:
            </p>

            <p className='component-property-desc'><strong><code>Small</code></strong> - This is the smallest available
                size for our badges. It's
                particularly
                useful in tight
                spaces or when paired with small text.
            </p>
            <p className='component-property-desc'><strong><code>Medium</code></strong> - This is the standard size for
                badges, used most commonly across
                the
                interface for
                typical content.
            </p>
            <p className='component-property-desc'><strong><code>Large</code></strong> - Large badges are primarily used
                when the badge needs to be visually
                emphasized or when
                paired with larger text.
            </p>
            <p className='component-property-desc'><strong><code>Extra Large</code></strong> - This size is used
                sparingly, only for significant points of
                focus or
                when the
                badge is used alongside very large text or within large components.
            </p>
            <br/>

            <BadgeSizesSVG/>
            <br/>


            <h2>Variants</h2>

            <p>Badges are categorized into the following
                variants: <strong><code>Default</code></strong>, <strong><code>Neutral</code></strong>, <strong><code>Warning</code></strong>,
                <strong><code>Danger</code></strong>, <strong><code>Success</code></strong>, <strong><code>Disabled</code></strong>,
                and <strong><code>Light</code></strong>.</p>

            <p>When applying badges, remember to maintain consistency. The meaning of each status should be consistently
                applied throughout the system to avoid confusion. Similarly, the chosen size and format should
                effectively communicate the message and suit the space it occupies.</p>

            <p>When choosing the badge type, consider the significance of the information being displayed. High-priority
                warnings should be clearly distinguishable from general information. Furthermore, ensure that the color
                contrast of the badges adheres to accessibility standards to make them legible for all users. Lastly,
                the icon chosen should be easily understood and complement the text in effectively conveying the badge's
                message.</p>
            <br/>

            <h2>Layout and Spacings</h2>

            <BadgeLayoutsSVG/>

            <br/>
            <br/>
            <h2>Example from the platform</h2>
            <p>The example of badge component usage for displaying Creator's status in Campaign (Hired status).</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/badge/badge-example.png"/>
            </figure>
        </article>
    )
}
