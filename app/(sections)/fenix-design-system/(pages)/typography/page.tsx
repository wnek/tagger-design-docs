import React from 'react'
import Image from 'next/image'

export default function Typography() {
    return (
        <article className="page sans">
            <header>
                <h1 className="page-title">Typography</h1>
            </header>
            <div className="page-body">
                <Image width={1600} height={1000} alt="Banner about typograhy"
                       src="/img/pages/design-system/typography/Banner_Typography.jpg"/>
                <h2>Our typeface</h2>
                <p>In our design system, we use system fonts
                    in <code><strong>&normal</strong></code> and <code><strong>$semi</strong></code> weights
                    to create a clear visual hierarchy and ensure easy readability. This choice not only
                    maintains consistency across platforms but also optimizes performance
                    for a smoother user experience.
                </p>
                <h2>Headings</h2>
                <p>Headers are used to create a hierarchical structure in our
                    content, making it easier for users to navigate and understand the information.</p>
                <img
                    src="/img/pages/design-system/typography/Frame_2415.jpg"/>
                <h2>Paragraph</h2>
                <p>Paragraphs range in size to offer flexibility in
                    presenting information with different levels of importance.</p>
                <img
                    src="/img/pages/design-system/typography/Frame_2416.jpg"/>
                <h2>How Establishing a Typography Hierarchy?</h2>
                <img
                    src="/img/pages/design-system/typography/How.jpg"/>
                <p>When developing a design system, typography plays a
                    crucial role in creating a visual hierarchy within a project. Here&#x27;s an outline of the process
                    for
                    establishing hierarchy using typography:</p>
                <h3>Start with Font Sizes:</h3>
                <img
                    src="/img/pages/design-system/typography/size.jpg"/>
                <p>Begin by defining font sizes that correspond to different
                    levels of hierarchy. Consider using a range of font sizes to convey importance and emphasize
                    content. Larger
                    font sizes often signify headings or prominent elements, while smaller font sizes are suitable for
                    body text
                    or less significant information.</p>
                <h3>Color Variation:</h3>
                <img
                    src="/img/pages/design-system/typography/color.jpg"/>
                <p>Next, utilize color to enhance the visual hierarchy.
                    Initially, employ the $primary color for typography throughout the design system. The primary color
                    typically signifies the most important information or key elements on the page. As the hierarchy
                    descends,
                    transition to the $secondary color for less significant elements. This shift in color can help
                    differentiate
                    between content levels and guide the user&#x27;s attention accordingly.</p>
                <h3>Font Weight:</h3>
                <img
                    src="/img/pages/design-system/typography/weight.jpg"/>
                <p><code>$normal</code>: This is the standard weight used
                    for the majority of the text within the application.</p>
                <p><code>$semi</code>: A slightly bolder weight primarily
                    used for call to action (CTA) and highlighting purposes. It is used sparingly, as the last means of
                    emphasizing text, after size and color.</p>


                <p className='callout'>By following these steps, you can create a typography-based hierarchy within your
                    design system. Remember that consistency and clarity are key, ensuring that users can easily
                    understand
                    and navigate the content based on visual cues provided by font sizes, color variations, and font
                    weights.</p>

            </div>
        </article>
    )
}
