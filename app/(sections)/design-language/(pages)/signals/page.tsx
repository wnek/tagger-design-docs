import Link from 'next/link'
import React from 'react'

export default function Badge() {
    return (
        <article>
            <h1>Signals</h1>

            <br/>

            <p>Signals Reports feature a captivating color palette comprising various shades of blue. Blue, a hue often
                associated with trust, reliability, and professionalism, has been thoughtfully selected to enhance the
                user experience and convey the platform's commitment to accurate, data-driven insights.</p>

            <h2>The Psychology of Blue</h2>

            <p>Blue is widely recognized as a color that evokes feelings of calmness, stability, and trust. Research
                suggests that blue can elicit a sense of reliability and professionalism, making it an ideal choice for
                contexts where accuracy and credibility are paramount. Additionally, blue is known to have a soothing
                effect on the mind, promoting a sense of tranquility and focus.</p>

            <h3>Conveying Accuracy and Data-driven Insights</h3>

            <p>Signals Reports play a pivotal role in providing users with valuable data and insights to inform their
                strategies. The use of blue within these reports conveys a sense of accuracy, reliability, and
                data-driven analysis. Research has indicated that blue is associated with precision and objectivity,
                enhancing perceived credibility. By incorporating blue, the platform communicates its commitment to
                delivering trustworthy and comprehensive reporting capabilities, empowering users to make informed
                decisions based on reliable insights.</p>

            <h3>Instilling Trust and Confidence</h3>

            <p>Trust is a vital component in any data-driven platform, and blue can significantly contribute to building
                trust among users. Blue is often perceived as a dependable and trustworthy color, evoking feelings of
                confidence and assurance. Research conducted at the University of British Columbia found that blue
                enhances trust and influences positive attitudes toward online information sources.</p>

            <h3>Promoting Clarity and Focus</h3>

            <p>The serene nature of blue aids in creating a focused and distraction-free environment within the Signals
                Reports. Blue has been shown to have a calming effect on the mind and can promote mental clarity and
                concentration. Blue enhances cognitive performance and focus, making it an advantageous color choice for
                presenting complex data.</p>

            <h2>The Color Palette</h2>

            <figure><img style={{margin: '3rem auto', maxWidth: '60rem'}} src="/img/pages/design-language/17.png"/></figure>
            <ol type="1" key="1">
                <li>base<strong>#3564F5</strong> shadow <strong>#303852</strong></li>
                <li>base<strong>#6FB0F9</strong> shadow <strong>#3957AB</strong></li>
                <li>base<strong>#D2E3FA</strong> shadow <strong>#8192B9</strong></li>
            </ol>
            <p>It is allowed to add suplement colors to the base palette if needed.</p>

            <hr/>
            <br/>
            <h3 className="gray-link">
                <Link href="https://drive.google.com/drive/folders/1FjN0tZ-i2JwlmYUittL3KYJo-mwwQ7s9?usp=sharing">Library
                    of
                    Illustrations for Signals</Link>
            </h3>
        </article>
    )
}
