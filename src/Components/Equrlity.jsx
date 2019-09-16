import React from 'react'
import { Accordion, Image, Item } from 'semantic-ui-react'

export default function Equrlity() {
    const panels = [
        {
            key: 'more',
            title: 'More About Equrlity',
            content: {
                content: (
                    <div>
                        <p>
                            eqURLity is an online content distribution service developed by Gary and Emma Stephenson. The father-daughter team recruited Gary’s expertise in software engineering with Emma’s knowledge and experience of the challenges of monetising creative content in the 21st century to develop a groundbreaking technology that allows creators to distribute and monetize their work entirely on their own terms. The system shakes up the normal incentive structures that tend to benefit middle men and instead gives creators the option to offer small financial incentives directly to consumers to ‘try-out’ their product before they purchase it (be it music, art, writing or other). Non-creators can also make money on eqURLity to by investing in quality content and getting it in front of new audiences. The system is integrated with and inspired by Bitcoin technology.
                        </p>
                        <p>
                            Emma’s new album ‘I Wrote You a Song’ is available for streaming and purchase on equrlity.com. Emma’s streaming schedules allow listenerss to collect a small payment to try-before-they-buy. Should they choose not to continue streaming her music, they are free to spend the tokens consuming other content on the system, or withdraw them to a valid bitcoin address at anytime.
                    </p>
                    </div>
                ),
            },
        },
    ]

    return <>

        <Item.Group>
            <Item
                header="Equrlity"
                image='https://via.placeholder.com/200'
                description='Stream and purchase Emma’s music on eqURLity.com, a new content distribution platform founded by Emma and her father Gary Stephenson.'
                extra={<Accordion panels={panels} />}
            />
        </Item.Group>
    </>
}
