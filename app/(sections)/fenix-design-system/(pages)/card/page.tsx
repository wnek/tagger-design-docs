import React from 'react'

export default function Card() {
    return (
        <article>
            <h1>Card</h1>
            <br/>
            <p>The "card" component is an element used to display information in a concise and visually appealing
                manner. It comes in four distinct variations, each tailored to suit specific use cases within the
                platform. Below are the different scenarios in which the card component is utilized:</p>

            <h2>Campaign Card</h2>

            <p>This type of card is used to present information about a campaign. It typically includes:</p>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-campaign-anatomy.png"/></figure>

            <p style={{marginBottom: '24px'}}>
                <code>Image</code> - A visual representation or logo of the campaign.</p>

            <p style={{marginBottom: '24px'}}><code>Status</code> - Information about the campaign’s status</p>

            <p style={{marginBottom: '24px'}}><code>Label</code> - The title or name of the campaign.</p>

            <p style={{marginBottom: '24px'}}><code>Secondary Text</code> - Contains additional information such as the
                campaign's start date, end
                date, or any other relevant details that provide context.</p>

            <p style={{marginBottom: '24px'}}><code>Additional Information</code> - This can include buttons and the
                number of creators employed and
                the total posts created.
            </p>

            <p className='callout'>
                ☝ Status, Secondary Text, and Additional Information may vary depending on the place of component use.
            </p>

            <br/>
            <h3>Spacings and Layout</h3>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-campaign-layout.png"/></figure>

            <br/>
            <h2>Creator Card</h2>

            <p>Used to display information about a creator. The content varies based on the context:</p>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-user-anatomy.png"/></figure>

            <p style={{marginBottom: '24px'}}><code>Avatar</code> - an image that represents a user</p>

            <p style={{marginBottom: '24px'}}><code>Status</code> - Information about the creator's status</p>

            <p style={{marginBottom: '24px'}}><code>Additional Information</code> - Varies by location. In a campaign
                page, it might include
                details
                linking the
                creator to that campaign. In places like affinity, it might include information on what connects two
                creators.
            </p>

            <p className='callout'>
                ☝ Status and Additional Information may vary depending on the place of component use.
            </p>

            <br/>
            <h3>Spacings and Layout</h3>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-user-layout.png"/></figure>

            <br/>
            <h2>Content Card</h2>

            <p>This variation is used to showcase specific content or posts, with the following components:</p>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-post-anatomy.png"/></figure>

            <p style={{marginBottom: '24px'}}>
                <code>Thumbnail</code> - a miniature background thumbnail showcases the actual content of the creator's
                post, serving as an instant visual cue for the user.</p>

            <p style={{marginBottom: '24px'}}><code>Platform</code> - an accompanying icon identifies the platform from
                which the post originates,
                helping users recognize the content's source.</p>

            <p style={{marginBottom: '24px'}}><code>Hover Metrics (Desktop Version)</code> - in the desktop version,
                hovering over the component
                reveals
                general metrics related to the post, such as views, likes, or comments. This hover effect adds
                an extra layer of information without cluttering the initial view.
            </p>

            <br/>

            <h3>Spacings and Layout</h3>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-post-layout.png"/></figure>

            <br/>
            <h2>Summary Card</h2>

            <p>The most elaborate of the card types, the summary card can encompass a variety of
                information:</p>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-summary-anatomy.png"/></figure>

            <p style={{marginBottom: '24px'}}>
                <code>User Block</code> - Go to the
                [documentation](https://www.notion.so/User-Block-2e21ab38c19e404aa0fe0741e349d71a?pvs=21).</p>

            <p style={{marginBottom: '24px'}}><code>Chart</code> - Optionally, a visual representation like a chart or
                graph to illustrate trends
                or comparisons.</p>

            <p style={{marginBottom: '24px'}}><code>Data Table</code> - A table containing relevant data or statistics.
            </p>

            <br/>
            <h3>Spacings and Layout</h3>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-summary-layout.png"/></figure>

            <br/>
            <h2>Template Card</h2>

            <p>The Template Card component is a versatile and reusable design element primarily
                used to present presentation or report templates within an interface.</p>

            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-template-anatomy.png"/></figure>

            <p style={{marginBottom: '24px'}}>
                <code>Thumbnail</code> - This is a visual representation of the specific presentation or
                report template. It gives the user a preview of what to expect from the
                template.</p>

            <p style={{marginBottom: '24px'}}><code>Title</code> - It is important that the name is clear, concise, and
                descriptive of the
                template’s purpose or content to assist the user in making an informed
                selection.</p>

            <p style={{marginBottom: '24px'}}><code>Icon</code> - An optional feature, an icon can be added to the label
                to provide
                additional context or information at a glance. The icon should be meaningful and
                relevant to the template being represented.</p>

            <p style={{marginBottom: '24px'}}><code>Description</code> - This provides further information about the
                template. This could
                include details about the structure of the template, the kind of content it is
                suited for, or any special features it might have. This text should be kept
                brief and informative to not overwhelm the user but still provide valuable
                insight into the template.</p>

            <br/>
            <h3>Spacings and Layout</h3>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-template-layout.png"/></figure>

            <br/>
            <h2>Example from the platform</h2>
            <p>The example of template card component usage for displaying a template on Signals Playbooks grid.</p>
            <figure><img style={{margin: '3rem auto'}}
                         src="/img/pages/design-system/card/card-example.png"/></figure>
        </article>
    )
}
