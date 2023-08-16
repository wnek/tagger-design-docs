import React from 'react'
import Image from 'next/image'

export default function Grid() {
    return (
        <article>
            <h1>Grid</h1>
            <Image width={1600} height={1000} alt="Banner about grids"
                   src="/img/pages/design-system/grid/grid.jpg"/>
            <h2>Full Width Grid</h2>
            <p>The Full Width Grid is an adaptive layout designed for a maximum of 6 columns. It is characterized by its
                ability to expand and contract according to the available screen width. Each element within this grid
                type spans the full width of its respective column.</p>

            <h3>Usage</h3>
            <p>This grid type is best suited for displaying homogeneous content where each element requires a
                significant portion of the screen width for an optimal viewing experience.</p>

            <h3>Grid Properties</h3>
            <ol>
                <li><strong>Max Columns:</strong> 6</li>
                <li><strong>Gap:</strong> 16px</li>
                <li><strong>Column Width:</strong> Dynamic (stretches to full screen width)</li>
                <li><strong>Element Width:</strong> Expands to full width of the column</li>
            </ol>

            <h2>Centered Grid</h2>
            <p>The Centered Grid, designed for a maximum of 5 columns, presents a more compact layout. Unlike the Full
                Width Grid, it does not stretch to fill the screen width but remains centered. Each column in this grid
                type can reach up to 250px in width.</p>

            <h3>Usage</h3>
            <p>This grid type is ideal for displaying smaller elements or heterogeneous content where individual items
                don't require extensive horizontal space.</p>

            <h3>Grid Properties</h3>
            <ol>
                <li><strong>Max Columns:</strong> 5</li>
                <li><strong>Gap:</strong> 16px</li>
                <li><strong>Column Width:</strong> Up to 250px</li>
                <li><strong>Element Width:</strong> Centered</li>
            </ol>

            <p className='callout'>In both grid types, the 16px gap between elements ensures clear visual separation and
                better readability. It's essential to choose the right grid type depending on the content you're dealing
                with and the design aesthetics you want to achieve.</p>

        </article>
    )
}
