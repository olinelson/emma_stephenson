import React, { useEffect } from 'react'
import { Item, Divider, Menu, Accordion, Icon, Header, Container } from 'semantic-ui-react'
import { IconRow, StickyImage, TidalLogo, MobileStickyImage, Section, SectionHeader } from "./CustomComponents"

export default function IWroteYouASong(props) {



    useEffect(() => {
        if (props.isVisible === true && props.appState.routesInView["/i_wrote_you_a_song"] !== true) props.setAppState({ ...props.appState, routesInView: { ...props.appState.routesInView, "/i_wrote_you_a_song": true } })
        if (props.isVisible === false && props.appState.routesInView["/i_wrote_you_a_song"] !== false) props.setAppState({ ...props.appState, routesInView: { ...props.appState.routesInView, "/i_wrote_you_a_song": false } })
    }, [props.isVisable, props.history, props])





    const items = [

        {
            childKey: 0,
            // image: 'https://via.placeholder.com/200',
            image: <StickyImage wrapped size="large" src='https://via.placeholder.com/400' />,
            header: <><MobileStickyImage size="medium" centered src='https://via.placeholder.com/400' /><Header as="h1" content="I Wrote you a song 1" /></>,
            description: 'Blurb',
            meta: <IconRow>
                <Menu.Item href="#" icon={<Icon link name="spotify" size="large" />} size="large" />
                <Menu.Item href="#" icon={<Icon link name="itunes" size="large" />} size="large" />
                <Menu.Item href="#" content="Equrlity" />
                <Menu.Item href="#" icon={<TidalLogo />} size="large" />
            </IconRow>,
            extra: <><Accordion exclusive={false} panels={[
                {
                    key: 'About',
                    title: 'About',
                    content: {
                        content: (
                            <div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                            </div>
                        ),
                    },
                },
                {
                    key: 'Lyrics',
                    title: 'Lyrics',
                    content: {
                        content: (
                            <div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                            </div>
                        ),
                    },
                },
            ]} />
                <Divider hidden />
                <Divider hidden />
            </>
        },
        {
            childKey: 1,
            // image: 'https://via.placeholder.com/200',
            image: <StickyImage wrapped size="large" src='https://via.placeholder.com/400' />,
            header: <><MobileStickyImage size="medium" centered src='https://via.placeholder.com/400' /><Header as="h1" content="I Wrote you a song 2" /></>,
            description: 'Blurb',
            meta: <IconRow>
                <Menu.Item href="#" icon={<Icon link name="spotify" size="large" />} size="large" />
                <Menu.Item href="#" icon={<Icon link name="itunes" size="large" />} size="large" />
                <Menu.Item href="#" content="Equrlity" />
                <Menu.Item href="#" icon={<TidalLogo />} size="large" />
            </IconRow>,
            extra: <><Accordion exclusive={false} panels={[
                {
                    key: 'About',
                    title: 'About',
                    content: {
                        content: (
                            <div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                            </div>
                        ),
                    },
                },
                {
                    key: 'Lyrics',
                    title: 'Lyrics',
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
        },



    ]


    return <Section>
        <SectionHeader content="I Wrote You A Song" />
        <Container text>
            <p>Songs by Emma Grace Stephenson featuring six astonishing Australian vocalists, recorded at Engine Room Audio NYC. Produced by Darren Fewins.</p>
        </Container>
        <Item.Group items={items} />
        {/* <Divider hidden /> */}
        {/* <Divider hidden /> */}
    </Section>



}
