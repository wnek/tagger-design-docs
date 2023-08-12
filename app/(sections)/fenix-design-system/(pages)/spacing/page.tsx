import React from 'react'
import Image from 'next/image'

export default function Spacing() {
    return (
        <article>
            <header>

                <h1>Spacing</h1>

            </header>
            <div>
                <Image width={1600} height={1000} alt="Banner about grids"
                    src="/img/pages/design-system/spacing/spacing.jpg" />
                <p>Our design system incorporates a set of twelve predefined
                    spacing values, labeled <code>space-0</code> through <code>space-12</code>. These values help to maintain
                    consistent spaces across all design components and layouts. The goal is to foster a uniform visual rhythm
                    and balance throughout the user interface.</p>
                <ol>
                    <li><code>space-0</code>: This represents 0rem or 0px, and it&#x27;s used when elements need to sit flush
                        against each other without any space in between.</li>

                    <li><code>space-1</code>: Equating to 0.25rem or 4px, this minimal spacing is generally used for slight
                        padding around small elements or to create a subtle separation between adjacent elements.</li>

                    <li><code>space-2</code>: This spacing is 0.5rem or 8px and might be used for smaller padding or margins
                        around elements and between text lines.</li>

                    <li><code>space-3</code>: Corresponding to 0.75rem or 12px, this spacing provides a moderate separation
                        between elements, ensuring visual clarity.</li>

                    <li><code>space-4</code>: At 1rem or 16px, this spacing could be used as the default spacing for margins or
                        padding around medium-sized elements.</li>

                    <li><code>space-5</code> through <code>space-12</code>: These larger spacing values, ranging from 1.5rem or
                        24px (<code>space-5</code>) up to 6rem or 96px (<code>space-12</code>), are used for broader gaps,
                        larger padding, or separating distinct sections of the layout.</li>
                </ol>
                <p>By consistently applying these predefined spacings, we can
                    achieve a harmonious and balanced user interface that enhances usability and aesthetics. They help to
                    regulate the distances between elements, promoting a more efficient design process and ensuring visual
                    consistency across all components and layouts.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>space-0</th>
                            <td>0rem</td>
                            <td>0px</td>
                        </tr>
                        <tr>
                            <th>space-1</th>
                            <td>0.25rem</td>
                            <td>4px</td>
                        </tr>
                        <tr>
                            <th>space-2</th>
                            <td>0.5rem</td>
                            <td>8px</td>
                        </tr>
                        <tr>
                            <th>space-3</th>
                            <td>0.75rem</td>
                            <td>12px</td>
                        </tr>
                        <tr>
                            <th>space-4</th>
                            <td>1rem</td>
                            <td>16px</td>
                        </tr>
                        <tr>
                            <th>space-5</th>
                            <td>1.5rem</td>
                            <td>24px</td>
                        </tr>
                        <tr>
                            <th>space-6</th>
                            <td>2rem</td>
                            <td>32px</td>
                        </tr>
                        <tr>
                            <th>space-7</th>
                            <td>2.5rem</td>
                            <td>40px</td>
                        </tr>
                        <tr>
                            <th>space-8</th>
                            <td>3rem</td>
                            <td>48px</td>
                        </tr>
                        <tr>
                            <th>space-9</th>
                            <td>4rem</td>
                            <td>64px</td>
                        </tr>
                        <tr>
                            <th>space-10</th>
                            <td>4.5rem</td>
                            <td>72px</td>
                        </tr>
                        <tr>
                            <th>space-11</th>
                            <td>5rem</td>
                            <td>80px</td>
                        </tr>
                        <tr>
                            <th>space-12</th>
                            <td>6rem</td>
                            <td>96px</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

    )
}
