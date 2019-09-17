import React, { useRef, useEffect } from 'react'

import News from './News';
import Music from './Music';
import { Container, AlbumCard, IconRow, TidalLogo, StickyImage, MobileStickyImage } from './CustomComponents'
import Equrlity from './Equrlity';
import Advocacy from './Advocacy';
import Footer from './Footer';
import IWroteYouASong from './IWroteYouASong';

import { Button, Menu, Header, Sidebar, Icon, Items, Image, Item, Accordion, Divider } from 'semantic-ui-react'
import Hieronymus from './Hieronymus';

export default function Home(props) {

    const iWroteYouASongRef = useRef(null)
    const equrlityRef = useRef(null)
    const advocacyRef = useRef(null)
    const hieronymusRef = useRef(null)
    // const trackOneRef = useRef(null)
    // const trackTwoRef = useRef(null)





    useEffect(() => {
        console.log(props.location.pathname)
        switch (props.location.pathname) {
            case '/i_wrote_you_a_song':
                window.scroll({ top: iWroteYouASongRef.current.offsetTop, behavior: 'smooth' })
                break;

            // case '/i_wrote_you_a_song/1':
            //     window.scroll({ top: trackOneRef.current.offsetTop, behavior: 'smooth' })
            //     break;

            // case '/i_wrote_you_a_song/2':
            //     window.scroll(
            //         { top: trackTwoRef.current.offsetTop, behavior: 'smooth' }
            //     )
            //     break;

            case '/equrlity':
                window.scroll({ top: equrlityRef.current.offsetTop, behavior: 'smooth' })
                break;

            case '/advocacy':
                window.scroll({ top: advocacyRef.current.offsetTop, behavior: 'smooth' })
                break;
            default:

            // console.log(window.location.pathname)
            // console.log('root');
        }
    }, [props])

    return <>
        <Container>

            <Header as="h1" style={{ fontSize: "4rem" }} textAlign="center">Emma Stephenson</Header>

            <News />




            <Divider hidden />
            <Divider hidden />
            <div ref={iWroteYouASongRef} />
            <IWroteYouASong />


            <Divider hidden />
            <Divider hidden />
            <div ref={hieronymusRef} />
            <Hieronymus />






            {/* verbose */}
            {/* <Item.Group relaxed="very">
                <div ref={trackOneRef}></div>

                < Item >
                    <StickyImage wrapped size="large" src='https://via.placeholder.com/400' />

                    <Item.Content>
                        <Item.Header><><MobileStickyImage size="medium" centered src='https://via.placeholder.com/400' /><Header as="h1" content="I Wrote you a song 1" /></></Item.Header>
                        <Item.Meta><IconRow>
                            <Menu.Item href="#" icon={<Icon link name="spotify" size="large" />} size="large" />
                            <Menu.Item href="#" icon={<Icon link name="itunes" size="large" />} size="large" />
                            <Menu.Item href="#" content="Equrlity" />
                            <Menu.Item href="#" icon={<TidalLogo />} size="large" />
                        </IconRow></Item.Meta>
                        <Item.Description>
                            <Image src='/images/wireframe/short-paragraph.png' />
                        </Item.Description>
                        <Item.Extra><><Accordion exclusive={false} panels={[
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
                        </></Item.Extra>
                    </Item.Content>
                </Item >
                <div ref={trackTwoRef}></div>

                < Item >
                    <StickyImage wrapped size="large" src='https://via.placeholder.com/400' />

                    <Item.Content>
                        <Item.Header><><MobileStickyImage size="medium" centered src='https://via.placeholder.com/400' /><Header as="h1" content="I Wrote you a song 2" /></></Item.Header>
                        <Item.Meta><IconRow>
                            <Menu.Item href="#" icon={<Icon link name="spotify" size="large" />} size="large" />
                            <Menu.Item href="#" icon={<Icon link name="itunes" size="large" />} size="large" />
                            <Menu.Item href="#" content="Equrlity" />
                            <Menu.Item href="#" icon={<TidalLogo />} size="large" />
                        </IconRow></Item.Meta>
                        <Item.Description>
                            <Image src='/images/wireframe/short-paragraph.png' />
                        </Item.Description>
                        <Item.Extra><><Accordion exclusive={false} panels={[
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
                        </></Item.Extra>
                    </Item.Content>
                </Item >

            </Item.Group> */}
            {/* end of verbose */}



            <Divider hidden />
            <Divider hidden />

            {/* asd;lfjkha;sdkfjasf */}





            <div ref={equrlityRef} />
            <Equrlity />

            <div ref={advocacyRef} />
            <Advocacy />


        </Container>
        <Footer />
    </>
}
