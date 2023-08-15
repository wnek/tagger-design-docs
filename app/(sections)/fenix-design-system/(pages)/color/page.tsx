"use client"

import React from 'react'
import dynamic from 'next/dynamic';
import {TypographyPrimSVG} from './images/typography_prim';
import {TypographyCTASVG} from './images/typography_cta';
import {BorderSVG} from './images/typography_border';
import {PrimarySVG} from './images/primary';
import {GrayscaleSVG} from './images/grayscale';
import {StatusSuccessSVG} from './images/status_success';
import {StatusWarningSVG} from './images/status_warning';
import {StatusErrorSVG} from './images/status_error';
import {StatusInfoSVG} from './images/status_info';
import {StatusAdditionalSVG} from './images/status_add';
import {Additional1SVG} from './images/additional-1';
import {Additional2SVG} from './images/additional-2';
import {Additional3SVG} from './images/additional-3';
import {Additional4SVG} from './images/additional-4';
import {Additional5SVG} from './images/additional-5';
import {Additional6SVG} from './images/additional-6';

const ReactPlayer = dynamic(() => import('react-player/lazy'), {ssr: false});

export default function Color() {
    return (

        <article>
            <header>
                <h1>Color</h1>
            </header>
            <div>


                <ReactPlayer url='/img/pages/design-system/color/color.mp4' controls={false}
                             playing={true} muted={true} loop={true} width="100%" height="100%"/>
                <h2>Typography Colors</h2>
                <p>In our design system, we use seven distinct color codes
                    for various typographical purposes:</p>
                <ol>
                    <li><code><strong>$primary</strong></code>: This color is meant for the most important texts that
                        are
                        supposed to draw immediate attention. It can be used for headings, important labels, titles, and
                        such.
                    </li>

                    <li><code><strong>$secondary</strong></code>: A softer shade meant for less important texts or
                        longer
                        paragraphs. It provides a visual hierarchy between the primary and secondary content, making the
                        content
                        more readable and well-organized.
                    </li>

                    <li><code><strong>$placeholder</strong></code>: This color is used specifically for input fields. It
                        is used
                        to indicate where users can input data and to provide an example of what the user should enter.
                    </li>

                    <li><code><strong>$disabled</strong></code>: This is used for inactive or disabled text fields. It
                        visually
                        communicates that the text or field is not accessible or modifiable at the given time.
                    </li>

                    <li><code><strong>$white</strong></code>: This color is mainly used for button texts, but it can
                        also be
                        used for text placed against darker backgrounds to ensure legibility.
                    </li>

                    <li><code><strong>$link</strong></code>: This color is used exclusively for text links. It helps
                        users
                        recognize clickable texts or hyperlinks within the content.
                    </li>

                    <li><code><strong>$link-hover</strong></code>: This color is used to indicate a hover state for text
                        links.
                        It provides visual feedback when the user hovers over a link, signifying that the text is
                        interactive.
                    </li>
                </ol>
                <p className='callout'>
                    Remember, consistent use of these color codes across all typography in the system
                    will lead to a coherent user interface that is visually appealing and easy to understand.
                    Always ensure that the color contrast is sufficient to maintain readability under all circumstances.
                </p>
                <figure>
                    <TypographyPrimSVG/>
                </figure>
                <h2>Call to Action Colors</h2>
                <p>Our design system utilizes five specific color codes for
                    background usage in CTA elements:</p>
                <ol>
                    <li><code><strong>$primary</strong></code>: This color is designated for the most significant
                        buttons,
                        particularly those that appear individually. It draws immediate attention and encourages user
                        interaction, making it ideal for important actions like &quot;Hire&quot;, &quot;Create&quot;, or
                        &quot;Download&quot;.
                    </li>

                    <li><code><strong>$hover</strong></code>: This color is employed to signify the hover state of the
                        CTA. When
                        the user&#x27;s cursor moves over the button, the color change provides visual feedback,
                        signaling that
                        the element is interactable.
                    </li>

                    <li><code><strong>$pressed</strong></code>: This color is used to indicate the pressed state of a
                        button. It
                        is a feedback mechanism that confirms a user&#x27;s interaction, such as a mouse click or touch,
                        showing
                        that the action is being processed.
                    </li>

                    <li><code><strong>$white</strong></code>: This color holds the same importance as
                        <code><strong>$primary</strong></code> in the hierarchy but is employed against dark backgrounds
                        to
                        maintain contrast and readability. It should be used with caution to ensure that the button does
                        not
                        blend with the background, reducing its prominence.
                    </li>

                    <li><code><strong>$disabled</strong></code>: This color is used when the button is inactive or when
                        the
                        action associated with it is unavailable. It serves as a visual clue to users that the button
                        cannot be
                        interacted with at the moment.
                    </li>
                </ol>
                <p className='callout'>

                    By consistently using these color codes in your CTAs, you can create an intuitive
                    and visually engaging user interface. It&#x27;s essential to ensure that the colors are used
                    correctly
                    to convey the right message and to keep the interface clear and user-friendly.
                </p>
                <TypographyCTASVG/>
                <h2>Primary Color</h2>
                <p>In our design system, we have designated five specific
                    shades of the <code><strong>$primary</strong></code> color, all varying in saturation. The intention
                    is to
                    maintain contrast among different elements, without deviating from the main color theme.</p>
                <p><code><strong>$primary</strong></code>: This leading color
                    is applied to active tabs or to highlight key elements in our user interface. Alongside
                    <code><strong>$cta/primary</strong></code>, this color holds the utmost importance in our platform,
                    serving
                    as the cornerstone of our design language.
                </p>
                <p className='callout'>
                    The remaining shades of the <code><strong>$primary</strong></code> color are
                    utilized in such a way that they contrast well with other elements while maintaining harmony within
                    the
                    <code><strong>$primary</strong></code> palette.
                </p>
                <p><code><strong>$primary-lightest</strong></code>: This is
                    the lightest shade of <code><strong>$primary</strong></code> and is often used as a background for
                    callouts
                    or highlight sections. Text, in the base <code><strong>$primary</strong></code> color, placed on a
                    <code><strong>$primary-lightest</strong></code> background, is a common combination in our design
                    system.
                    This combination provides an elegant and clean look while maintaining excellent readability and
                    visual
                    hierarchy.
                </p>
                <p>Other <code><strong>$primary</strong></code> variants
                    (light, dark, darkest) are used as needed to ensure that contrast is maintained and readability is
                    prioritized. The key is to ensure that each variant feels cohesive with the others and with the
                    system as a
                    whole.</p>
                <p className='callout'>Remember, the <code><strong>$primary</strong></code> color
                    scheme is fundamental to establishing the visual identity of the platform. As such, its usage should
                    be
                    consistent and deliberate to create an engaging and harmonious user interface.</p>
                <figure><PrimarySVG/></figure>
                <h2>Border Colors</h2>
                <p>Our design system has specified five unique color codes to
                    represent different border types:</p>
                <ol>
                    <li><code><strong>$border-default</strong></code>: This color is used for interactive elements,
                        effectively
                        outlining areas where user interaction is possible. It&#x27;s generally applied to clickable or
                        selectable items, helping to distinguish them from the rest of the content.
                    </li>

                    <li><code><strong>$border-light</strong></code>: This color serves as a decorative outline for
                        components.
                        Its lower saturation helps to keep the interface clean and uncluttered, subtly defining the
                        boundaries
                        of elements without drawing unnecessary attention.
                    </li>

                    <li><code><strong>$border-hover</strong></code>: This color is used to signal the hover state of an
                        element.
                        When a user&#x27;s cursor is placed over an interactive component, this border color change
                        provides
                        clear visual feedback.
                    </li>

                    <li><code><strong>$border-active</strong></code>: This color is utilized to indicate the active
                        state of
                        elements, such as an active text field. It highlights the element in focus, guiding the user
                        during
                        their interaction with the platform.
                    </li>

                    <li><code><strong>$border-error</strong></code>: This color is employed when there&#x27;s a need to
                        display
                        an error to the user, commonly in input fields. It acts as a clear visual indicator of areas
                        requiring
                        user attention or correction.
                    </li>
                </ol>
                <p>By consistently using these color codes in your borders,
                    you can maintain a clean and structured interface that effectively guides user interaction.
                    It&#x27;s
                    crucial to ensure the appropriate use of these colors to maintain clarity and user-friendly
                    design.</p>
                <figure><BorderSVG/></figure>
                <h2>Gray Scale</h2>
                <p>Our design system features a nuanced range of fourteen
                    <code><strong>$gray</strong></code> shades. The <code><strong>$gray</strong></code> colors are often
                    used as
                    visual supplements to our interfaces, providing subtle contrasts, delineating spaces, and enhancing
                    overall
                    readability.
                </p>
                <p>Some shades of <code><strong>$gray</strong></code> are
                    also incorporated into other color palettes, such as border colors or in denoting disabled states.
                    However,
                    we have assigned separate variables to these colors. This approach allows us to make global
                    adjustments more
                    seamlessly, providing the ability to differentiate changes between various color palettes, like
                    <code><strong>$gray</strong></code> and typography.
                </p>
                <ol>
                    <li>Light <code><strong>$gray</strong></code> shades (e.g.,
                        <code><strong>$gray-05 - $gray-50</strong></code>): These are typically used for background
                        colors,
                        borders, and disabled states. Their subtlety helps to maintain a clean, uncluttered appearance
                        without
                        overpowering other elements on the page.
                    </li>

                    <li>Medium <code><strong>$gray</strong></code> shades (e.g., <code><strong>$gray-50</strong></code>,
                        <code><strong>$gray-110</strong></code>): These provide stronger contrast and can be used for
                        visual
                        elements.
                    </li>
                </ol>
                <p>The specific use of each
                    <code><strong>$gray</strong></code> color should always align with its corresponding saturation
                    level,
                    ensuring consistency across different components and layouts. The right application of
                    <code><strong>$gray</strong></code> colors can add depth to your interface, leading to a more
                    immersive and
                    visually appealing user experience.
                </p>
                <figure><GrayscaleSVG/></figure>
                <h2>Status Colors</h2>
                <p>Our design system comprises a group of
                    <code><strong>$status</strong></code> colors, which can be divided into four major categories. Each
                    category
                    is represented by five shades of a specific color, effectively conveying various states or
                    notifications
                    within the user interface.
                </p>
                <ol>
                    <li><code><strong>$success</strong></code>: Represented by a range of five green shades,
                        <code><strong>$success</strong></code> colors are used to indicate successful actions or states,
                        such as
                        a completed process or a correctly filled input field. The intensity of green used can vary
                        based on the
                        importance and impact of the success state.
                    </li>

                    <li><code><strong>$warning</strong></code>: This category uses five shades of yellow to represent
                        cautionary
                        states or notifications. These colors typically signal situations that require
                        users&#x27; attention,
                        like potential issues, but ones that do not necessarily prevent further actions.
                    </li>

                    <li><code><strong>$danger</strong></code>: This is a set of five red shades used to signify critical
                        errors
                        or issues. These colors are used to catch the user&#x27;s attention immediately and are
                        typically
                        employed when there are problems that need immediate attention or when an operation fails.
                    </li>

                    <li><code><strong>$neutral</strong></code>: Five shades of blue are used to indicate a neutral
                        state. These
                        colors are employed when there is information to be conveyed to the user that doesn&#x27;t fit
                        into the
                        success, warning, or danger categories. This could include general information or less critical
                        system
                        statuses.
                    </li>
                </ol>
                <p>At the end of the color palette, we replicate colors from
                    the groups mentioned above, which are then applied to the most common status indications.</p>
                <p>The judicious use of <code><strong>$status</strong></code>
                    colors plays a vital role in providing clear and immediate feedback to users about their
                    interactions and
                    the system state. By maintaining consistency in color coding, you can help users understand and
                    navigate the
                    interface more effectively.</p>
                <StatusSuccessSVG/>
                <br/>
                <StatusWarningSVG/>
                <br/>
                <StatusErrorSVG/>
                <br/>
                <StatusInfoSVG/>
                <br/>
                <StatusAdditionalSVG/>
                <h2>Additional Colors</h2>
                <p>Our design system includes an
                    <code><strong>$additional</strong></code> color palette, which is composed of six unique colors,
                    each
                    available in three different shades. The primary aim of these colors is to enhance the visual aspect
                    of the
                    interface, adding aesthetic value without directly influencing functionality or usability.
                </p>
                <ul>
                    <li>Light shades can be used as background colors or for subtle highlights.</li>
                    <li>Medium shades could be employed to add a bit more emphasis, while still
                        maintaining a balanced contrast with other elements.
                    </li>
                    <li>Dark shades can be used when a strong contrast is needed, or to draw
                        attention to a particular design element.
                    </li>
                </ul>
                <p>The <code><strong>$additional</strong></code> colors
                    should be used sparingly and strategically. Overuse could potentially lead to a visually cluttered
                    or
                    confusing interface. They should never overpower the primary and secondary colors that are central
                    to your
                    brand and the overall usability of the platform.</p>
                <p>In all applications, the goal should be to create a
                    visually appealing, engaging, and intuitive user interface.
                    The <code><strong>$additional</strong></code>
                    color palette is a valuable tool for achieving this when used appropriately and consistently.</p>
                <Additional1SVG/>
                <br/>
                <Additional2SVG/>
                <br/>
                <Additional3SVG/>
                <br/>
                <Additional4SVG/>
                <br/>
                <Additional5SVG/>
                <br/>
                <Additional6SVG/>
                <p>
                </p>
                <p>
                </p>
            </div>
        </article>
    )
}
