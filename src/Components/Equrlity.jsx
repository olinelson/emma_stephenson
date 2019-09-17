import React, { useEffect } from 'react'
import { Accordion, Image, Item, Menu, Icon, Header } from 'semantic-ui-react'
import { Section, SectionHeader, StickyImage, IconRow, TidalLogo, MobileStickyImage } from './CustomComponents'

export default function Equrlity(props) {

    useEffect(() => {
        if (props.isVisible === true && props.appState.routesInView["/equrlity"] !== true) props.setAppState({ ...props.appState, routesInView: { ...props.appState.routesInView, "/equrlity": true } })
        if (props.isVisible === false && props.appState.routesInView["/equrlity"] !== false) props.setAppState({ ...props.appState, routesInView: { ...props.appState.routesInView, "/equrlity": false } })


    }, [props.isVisable, props.history, props])

    const items = [{
        childKey: 0,
        // image: 'https://via.placeholder.com/200',
        image: <StickyImage wrapped size="small" src='https://via.placeholder.com/400' />,
        header: <><MobileStickyImage size="medium" centered src='https://via.placeholder.com/400' /></>,
        description: "Stream and purchase Emma’s music on eqURLity.com, a new content distribution platform founded by Emma and her father Gary Stephenson.",
        extra: <><Accordion exclusive={false} panels={[
            {
                key: 'More',
                title: 'More',
                content: {
                    content: (
                        <div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                    ),
                },
            },
        ]} />
        </>
    },]


    return <Section>
        <SectionHeader content="Equrlity" />
        <Item.Group items={items} />

    </Section >
}
