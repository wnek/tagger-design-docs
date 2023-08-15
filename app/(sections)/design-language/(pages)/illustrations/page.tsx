import Link from 'next/link'
import React from 'react'

export default function Illustrations() {
    return (
        <article>
            <h1>Illustrations</h1>

            <figure>
                <a>
                    <img style={{margin: '3rem 0'}} src="/img/pages/design-language/1.png"/>
                </a>
            </figure>

            <h3 style={{marginBottom: '3rem'}}>This documentation provides a comprehensive guide for the creation and
                usage of illustrations used in
                the platform. The illustrations are created using Adobe Photoshop with <strong>a style featuring grainy
                    gradients</strong>. This document outlines the specifications, guidelines, and best practices for
                creating and implementing these illustrations within the platform and an illustration library.</h3>
            <br/>
            <hr/>
            <h2>Illustration style</h2><h3>The illustrations incorporate a grainy gradient effect, adding depth and
            visual interest to the artwork. This technique brings an organic feel to the illustrations, making them more
            engaging and memorable. The grainy gradients are carefully applied to different elements, such as
            backgrounds, shapes, or textures, enhancing the overall composition and providing a cohesive look and feel.
            The color palette chosen for the illustrations aligns with the platform&#x27;s branding and visual identity.
            The colors are used strategically to highlight important elements, convey meaning, and create visual
            hierarchy within the illustrations, making complex concepts and data more accessible and engaging to the
            platform&#x27;s users.</h3>
            <p>While vector-based illustrations have their advantages in scalability and flexibility, the choice
                of <strong>using the raster format for these illustrations is driven by the desire for a more natural
                    feel</strong>. The raster format allows for more flexibility in incorporating intricate details and
                textures, providing a rich and visually appealing aesthetic. Besides that facts, it intricate detailing,
                creative freedom, and integration with the existing workflow. These factors contribute to the overall
                visual appeal and effectiveness of the illustrations in conveying technical information and enhancing
                the user experience.</p>
            <hr/>
            <h2>Technical Specifications</h2><p
        >
        </p>
            <ol type="1" key="1">
                <li><strong>File Format</strong>: save the illustrations in the PNG format to maintain transparency and
                    preserve image quality.
                </li>
                <li><strong>Resolution</strong>: use a <strong>minimum </strong>resolution of 72 pixels per inch (PPI)
                    to ensure high-quality output on various devices and screen sizes.
                </li>
                <li><strong>Color Mode</strong>: create illustrations in the RGB color mode to support accurate color
                    representation on digital platforms.
                </li>
            </ol>
            <p>
            </p><p>To ensure compatibility and optimal visual quality, the
            following technical specifications should be followed when creating illustrations.</p><p
        >
        </p>
            <figure><img style={{margin: '3rem 0'}} src="/img/pages/design-language/2.png"/></figure>
            <hr/>
            <br/>
            <h2>Creation Process</h2>
            <p>To create illustrations, follow these general steps:</p>
            <ol>
                <li><strong>Ideation</strong>: begin by conceptualizing the illustration and sketching out rough ideas.
                    Consider the purpose, context, and the specific information the illustration should convey. Refine
                    the sketches until the desired composition and layout are achieved.
                </li>
                <li><strong>Starting Point</strong>: create a new document with the appropriate canvas size and
                    resolution. Use layers to separate different elements and maintain flexibility during the design
                    process.
                </li>
                <li><strong>Shape</strong>: use Adobe Photoshop&#x27;s shape and pen tools to create the basic forms and
                    objects of the illustration. Pay attention to proportions, symmetry, and perspective if necessary.
                    Apply appropriate gradients and texturing techniques to achieve the desired grainy effect.
                </li>
                <li><strong>Detailing</strong>: add intricate details, highlights, and shadows to enhance the depth and
                    texture of the illustration. Utilize layer blending modes, and layer masks to achieve the desired
                    visual effects. Make sure you’re using grainy brush for shadows.
                </li>
                <li><strong>Color Selection</strong>: choose a color palette that aligns with the overall branding and
                    visual identity of the platform (if you’re designing an illustration for dedicated section, use its
                    palette - for the guideline, please see the “Color Palettes”). Ensure that the selected colors
                    harmonize well with each other and enhance the overall aesthetics of the illustration.
                </li>
                <li><strong>Exporting</strong>: once the illustration is finalized, export it as a PNG file with the
                    recommended specifications mentioned earlier. This will ensure the compatibility and high-quality
                    display of the illustration.
                </li>
            </ol>

            <p className="callout">NOTE: when shading, remember that thelight always comes from theright upper
                corner</p>

            <hr/>
            <h2>Implementation Guidelines</h2>
            <h3>To effectively implement the illustrations, maintain a consistent
                visual style throughout the platform by using illustrations that adhere to the specified style
                guidelines.
                Consistency enhances the user experience and strengthens the platform&#x27;s overall sense of the
                brand.
            </h3>

            <br/>

            <p>Whenever possible, <strong>create illustrations that can be
                reused </strong>across different sections or screens within the platform. This not only saves time and
                effort but also ensures a cohesive visual language. Ensure that the illustrations complement and
                reinforce
                the content they accompany.</p>
            <p>Take into
                account<strong> </strong>accessibility guidelines<strong> </strong>while designing the illustrations,
                ensure
                that they are easily distinguishable.</p>
            <figure><img style={{margin: '3rem 0'}} src="/img/pages/design-language/3.png"/></figure>
            <hr/>
            <h2>Color Palettes for Illustrations</h2><p
        >
        </p>
            <h3>Main Color Palette</h3>
            <figure><img style={{margin: '3rem 0'}} src="/img/pages/design-language/4.png"/></figure>
            <p>
            </p><p><strong>This palette encompasses both neutral and accent
            colors, working to create a visually appealing and cohesive character. The main colors in this palette
            include gray, orange, and red. The color on the left symbolizes the base color, while the color on the right
            is the complementary color to the base - its shadow.</strong></p><p
        >
        </p><p><strong>Orange </strong>(base #FBE1D2, shadow #F57B45) is a
            color that brings enthusiasm, excitement, and adventure to the platform. It injects energy and vibrancy into
            the design, adding a touch of liveliness to the user interface. Its use creates a dynamic and engaging
            visual experience. </p><p>
        </p><p><strong>Gray</strong> (base #E7E5D9, shadow #484E57) represents
            balance and stability. It provides a clean and organized backdrop, allowing other colors and elements to
            stand out effectively. </p><p>
        </p><p><strong>Red</strong> (base #EB6140, shadow #544447) is a
            powerful and attention-grabbing color that symbolizes passion and action.</p><p
        >
        </p><p>The color representation <strong>is not its rigid frame for RBG
            code</strong>. Along with the need for a concept, idea, color can be more or less intense, it can be more or
            less in percentage on the surface, all depending on the need. For example, we will distribute the intensity
            of colors differently when illustrating a sheet of paper than a metal block, because materials, even in the
            real world, have completely different physical properties. These guidelines are starting, but there are
            concessions to them that sometimes occur during the creative process. <strong>The resulting dominant color
                is created as a result of the base and complementary colors when the grainy brush combines the two
                colors together. </strong>Depending on the concept, it is allowed to use other natural colors as a
            supplement.</p>
            <hr/>
            <h2>Color Palettes Dedicated to Sections</h2><p
        >
        </p><p>Each section of Tagger has an individual color palette for the
            illustration style to enhance the user experience and effectively communicate specific messages that each
            section has to offer.</p><p>
        </p>
            <table>
                <tbody>
                <tr>
                    <td>
                        <Link href="/design-language/campaigns">Campaigns</Link>
                    </td>
                    <td>The color palette for Campaigns features <strong>purple
                        tones</strong>. Purple is often associated with creativity and ambition. In the context of the
                        platform, purple is used for Campaigns to evoke a feeling of innovation and strategic thinking.
                        It conveys that the platform offers creative solutions for marketing campaigns, appealing to
                        users who seek to stand out and make a lasting impact.
                    </td>
                </tr>
                <tr>
                    <td><Link href="/design-language/discovery">Discovery</Link></td>
                    <td>The Discovery color palette incorporates <strong>vibrant orange
                        shades</strong>. Orange is a warm and energetic color that represents enthusiasm, excitement,
                        and adventure. It stimulates curiosity and a sense of exploration. In the context of the
                        platform, orange is used for Discovery to encourage users to explore new opportunities and
                        uncover valuable insights. It signifies that the platform provides a dynamic and engaging
                        experience.
                    </td>
                </tr>
                <tr>
                    <td><Link href="/design-language/labels">Labels</Link></td>
                    <td>The color palette for Labels utilizes <strong>shades of
                        yellow</strong>. Yellow is associated with optimism. In the platform, yellow is used for Labels
                        to bring attention to important information, categories. The use of yellow promotes a positive
                        and approachable atmosphere within the platform, bringing a feeling that users can easily
                        identify and categorize content.
                    </td>
                </tr>
                <tr>
                    <td><Link href="/design-language/signals">Signlas</Link></td>
                    <td>Signals color palette consists of various <strong>shades of
                        blue</strong>. Blue is often linked to trust and reliability. It evokes a sense of calmness and
                        stability. In the context of the platform, blue is used for Signals Reports to convey accuracy,
                        data-driven insights, and credibility. It signifies that the platform provides reliable and
                        comprehensive reporting capabilities. The use of blue fosters a sense of trust and confidence in
                        the data and analysis presented within the reports.
                    </td>
                </tr>
                <tr>
                    <td><Link href="/design-language/one-sheets">One Sheets</Link></td>
                    <td>The color palette for One Sheets features <strong>turquoise
                        tones</strong>. Turquoise is a combination of blue and green, representing balance, harmony, and
                        creativity. It evokes a sense of tranquility and freshness. In the platform, turquoise is used
                        for One Sheets to inspire a creative and balanced approach to designing comprehensive summaries.
                        It signifies that the platform supports the creation of visually appealing and informative one
                        sheets that capture the essence of data in a harmonious manner.
                    </td>
                </tr>
                <tr>
                    <td><Link href="/design-language/taggerLabs">Tagger Labs</Link></td>
                    <td>The combination of <strong>red, blue, and green</strong> colors
                        in the Tagger Labs signifies its experimental and innovative nature. The vibrant red represents
                        passion and energy, emphasizing the drive to explore new boundaries. The trustworthy blue
                        conveys professionalism, reflecting the research conducted within Tagger Labs. The refreshing
                        green symbolizes growth and a forward-thinking mindset, promising innovative solutions and the
                        pursuit of new ideas. Together, these colors create a visually compelling palette that captures
                        the essence of Tagger Labs&#x27; commitment to delivering something new and groundbreaking.
                    </td>
                </tr>
                </tbody>
            </table>
            <p>Each color choice was made with careful consideration of
                its associated emotions and the intended message for each platform section, creating a cohesive and
                engaging
                visual environment that aligns with the psychological impact of the chosen colors.</p>
            <hr/>
            <h2>What to Avoid</h2>
            <h3>While illustrations can be a powerful visual tool in enhancing
                user experiences, it is essential to use them thoughtfully and strategically. Improper use of
                illustrations
                can diminish the platform&#x27;s effectiveness. This chapter explores common pitfalls and mistakes to
                avoid
                when incorporating illustrations, emphasizing the importance of maintaining consistency, clarity, and
                usability.</h3>

            <hr/>
            <br/>
            <div style={{display: 'flex'}}>
                <div style={{maxWidth: '350px', marginRight: '32px'}}>
                    <figure><img src="/img/pages/design-language/5.png"/>
                    </figure>
                    <p>
                    </p><p>
                </p></div>
                <div>
                    <h3><strong>Lack of Relevance and Context</strong></h3><p
                >Illustrations should always serve a purpose and be
                    relevant to the content or functionality they accompany. Including irrelevant or unrelated
                    illustrations can confuse users and disrupt their understanding of the platform&#x27;s features. It
                    is important to ensure that illustrations support the content, enhance comprehension, or provide
                    visual cues that guide users through their journey. A clear and purposeful connection between the
                    illustrations and the platform&#x27;s functionality fosters an intuitive user experience.</p><p
                >
                </p></div>
            </div>

            <hr/>
            <br/>
            <div style={{display: 'flex'}}>
                <div style={{maxWidth: '350px', marginRight: '32px'}}>
                    <figure><img src="/img/pages/design-language/6.png"/></figure>
                </div>
                <div>
                    <h3><strong>Inconsistent Color Palettes</strong></h3><p
                >One common mistake is mixing color palettes dedicated to
                    specific sections within the platform. Each section&#x27;s color palette has been carefully chosen
                    to convey a distinct message and evoke specific emotions. Mixing these color palettes can lead to
                    confusion and visual inconsistency, compromising the overall user experience. It is crucial to
                    adhere to the designated color schemes for each section to maintain a cohesive and coherent visual
                    identity.</p><p>
                </p></div>
            </div>

            <hr/>
            <br/>
            <div style={{display: 'flex'}}>
                <div style={{maxWidth: '350px', marginRight: '32px'}}>
                    <figure><img src="/img/pages/design-language/7.png"/></figure>
                </div>
                <div><h3
                ><strong>Cluttered Visuals</strong></h3><p
                >While illustrations can enhance engagement, overusing them
                    or cluttering the platform with excessive visuals can overwhelm users and create visual noise. It is
                    crucial to strike a balance between visual elements and content clarity. Each illustration should
                    have a distinct purpose and to guide users or enhance their understanding. Avoid overcrowding
                    illustrations with too many elements, and prioritize simplicity and clarity to maintain a clean and
                    user-friendly interface.</p></div>
            </div>

            <hr/>
            <br/>
            <div style={{display: 'flex'}}>
                <div style={{maxWidth: '350px', marginRight: '32px'}}>
                    <figure><img src="/img/pages/design-language/8.png"/></figure>
                </div>
                <div><h3
                ><strong>Inconsistent Style or Quality</strong></h3><p
                >Consistency in the style and quality of illustrations is
                    paramount to maintain a cohesive visual language throughout the platform. Inconsistent styles, such
                    as mixing hand-drawn illustrations with 3D graphics in smaller illustrations, can create a
                    disjointed appearance. It is essential to establish clear guidelines for basic illustration styles
                    and ensure that illustrations adhere to those guidelines. Consistency in style and quality fosters a
                    polished and cohesive user experience, reinforcing the platform&#x27;s credibility.</p></div>
            </div>

            <hr/>
            <h2>Best Practices for Using Illustrations in the Platform</h2>
            <h3>Illustrations can be a powerful tool in enhancing the user
                experience within the influencer analysis platform. When used thoughtfully and strategically,
                illustrations
                can communicate complex ideas, guide users, and evoke emotions. This chapter explores best practices for
                incorporating illustrations in the platform, covering the use of placeholders, creating a cohesive
                visual
                language, and avoiding common mistakes to ensure that illustrations contribute positively to the
                platform&#x27;s effectiveness and user engagement.</h3>
            <br/>

            <hr/>
            <h2><strong>Utilizing Placeholders Effectively</strong></h2><p>
        </p><p>Placeholders are temporary visual cues that indicate the
            presence of content or interactions that will be added later. When employing placeholders, it is essential
            to use clear and recognizable icons or illustrations that align with the platform&#x27;s design language.
            Placeholder illustrations should convey the purpose of the missing content or interaction to keep users
            informed and engaged.</p>
            <figure><img style={{margin: '0 0 3rem 0'}} src="/img/pages/design-language/9.png"/></figure>
            <hr/>
            <h2><strong>Creating a Cohesive Visual Language</strong></h2><p
        >
        </p><p>Determine a specific style for section and for illustrations
            that align with the platform&#x27;s overall branding and design principles. Consistency in style and
            presentation creates a sense of familiarity and improves user recognition of visual cues throughout the
            platform.
        </p>
            <figure><img style={{margin: '0 0 3rem 0'}} src="/img/pages/design-language/10.png"/></figure>
            <hr/>
            <h2><strong>Enhancing Content Comprehension</strong></h2><p
        >
        </p><p>Illustrations can significantly enhance content comprehension,
            especially when dealing with complex data or information. Consider simple overall data visualizations to
            represent statistics, trends, or analysis results. However, ensure that the illustrations do not overwhelm
            the content or overshadow critical information.</p><p>
        </p>
            <figure><img style={{margin: '0 0 3rem 0'}} src="/img/pages/design-language/11.png"/></figure>
            <hr/>
            <h2><strong>Avoiding Distractions and Overuse</strong></h2><p
        >
        </p><p>While illustrations can enrich the user experience, overusing
            them or incorporating unnecessary visuals can lead to distractions and cognitive overload. Avoid including
            them where they do not serve a clear function. Ensure that every illustration aligns with the
            platform&#x27;s objectives and enhances the user&#x27;s understanding and engagement.</p><p
        >
        </p>
            <figure><img style={{margin: '0 0 3rem 0'}} src="/img/pages/design-language/12.png"/></figure>
            <hr/>
            <h2>Summary</h2><h3>The
            best practices for using illustrations in the platform empower users, promote engagement, and foster a deep
            connection between the platform and its audience. With the skillful integration of illustrations, the
            platform emerges as a visually compelling and user-friendly space where users can explore, analyze, and make
            informed decisions. </h3><p>
        </p><p>Harnessing the power of illustrations as a strategic tool
            enhances the platform&#x27;s effectiveness, elevates its visual communication, dedicated to delivering
            excellence and innovation in every user interaction.</p><p>
        </p>
            <hr/>
            <h2>Conclusion</h2>
            <p>Consistency, usability, and alignment with content are essential
                considerations during the creation and implementation of these illustrations, contributing to an
                enhanced
                user experience.</p><p>
        </p>
            <figure><img style={{margin: '0 0 3rem 0'}} src="/img/pages/design-language/13.png"/></figure>
            <hr/>
            <br/>
            <h4 className="gray-link">
                <Link href="https://drive.google.com/drive/folders/166nX3hsRy5ejamGW7LL9YJxCwRNBaB3G?usp=sharing">Library
                    of Existing Illustrations</Link>
            </h4>
            <h4 className="gray-link">
                <Link href="https://drive.google.com/drive/folders/1UPx6CGolC2vX_MlHLpMHHQbitR8-8U27?usp=sharing">Grainy
                    Brushes for Illustrations</Link>
            </h4>
        </article>
    )
}
