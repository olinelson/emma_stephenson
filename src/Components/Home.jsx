import React, { useRef, useEffect, useState } from 'react'

import News from './News';
import Music from './Music';
import { Container, AlbumCard, IconRow, TidalLogo, StickyImage, MobileStickyImage, StyledTrackVisibility, RefDivider, FooterContainer, FooterMenu } from './CustomComponents'
import Equrlity from './Equrlity';
import Advocacy from './Advocacy';
import Footer from './Footer';
import IWroteYouASong from './IWroteYouASong';

import { Button, Menu, Header, Segment, Sidebar, Icon, Items, Image, Item, Accordion, Divider } from 'semantic-ui-react'
import Hieronymus from './Hieronymus';
import TrashCanDream from './TrashCanDream';

import styled from 'styled-components'





// import StyledTrackVisibility from 'react-on-screen';

export default function Home(props) {


    const iWroteYouASongRef = useRef(null)
    const equrlityRef = useRef(null)
    const advocacyRef = useRef(null)
    const hieronymusRef = useRef(null)
    const trashCanRef = useRef(null)

    const [sideBarShown, setSideBarShown] = useState(false)

    const [appState, setAppState] = useState({
        routesInView: {
            '/': false,
            '/i_wrote_you_a_song': false,
            '/equrlity': false,
            '/hieronymus': false,
            '/advocacy': false,
        }
    })



    const routePicker = () => {
        let visibleRoutes = []

        for (let r in appState.routesInView) {
            if (appState.routesInView[r] === true) visibleRoutes.push(r)

        }
        return visibleRoutes
    }

    let visibleRoutes = routePicker()

    if (visibleRoutes.length === 1) {
        if (props.location.pathname !== visibleRoutes[0]) props.history.replace(visibleRoutes[0])
    }


    useEffect(() => {
        switch (window.location.pathname) {
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
            case '/trash_can_dream':
                window.scroll({ top: trashCanRef.current.offsetTop, behavior: 'smooth' })
                break;
            case '/hieronymus':
                window.scroll({ top: hieronymusRef.current.offsetTop, behavior: 'smooth' })
                break;

            case '/advocacy':
                window.scroll({ top: advocacyRef.current.offsetTop, behavior: 'smooth' })
                break;
            default:
        }
    }, [])

    const SideWaysMenu = styled(Menu.Menu)`
        // border: 1px solid red;
        overflow-y: hidden;
        overflow-x: hidden;
        overflow: -moz-scrollbars-none !important;

        ::-webkit-scrollbar {
        height: 0px;
        width: 4px;
        background-color: white;
        }        

        ::-webkit-scrollbar-thumb {
        background-color: white;

    }


    `

    return <>


        <Menu pointing style={{ position: 'sticky', top: "0", background: "white", zIndex: 100 }} secondary>
            <SideWaysMenu position="left">
                <Menu.Item active={props.location.pathname === "/i_wrote_you_a_song"} onClick={() => window.scroll({ top: iWroteYouASongRef.current.offsetTop, behavior: 'smooth' })} content="I Wrote You A Song" />
                <Menu.Item active={props.location.pathname === "/hieronymus"} onClick={() => window.scroll({ top: hieronymusRef.current.offsetTop, behavior: 'smooth' })} content="Hieronymus Trio Feat. Gian Slater" />
                <Menu.Item active={props.location.pathname === "/trash_can_dream"} onClick={() => window.scroll({ top: trashCanRef.current.offsetTop, behavior: 'smooth' })} content="Trash Can Dream" />
                <Menu.Item active={props.location.pathname === "/equrlity"} onClick={() => window.scroll({ top: equrlityRef.current.offsetTop, behavior: 'smooth' })} content="Equrlity" />
                <Menu.Item active={props.location.pathname === "/advocacy"} onClick={() => window.scroll({ top: advocacyRef.current.offsetTop, behavior: 'smooth' })} content="Advocacy" />

            </SideWaysMenu>
            <Menu.Menu position="right">
                <Menu.Item icon="facebook" />
                <Menu.Item icon="instagram" />
                <Menu.Item icon="youtube" />
                <Menu.Item icon="twitter" />
            </Menu.Menu>
        </Menu>



        <StyledTrackVisibility {...props} partialVisibility>
            <News appState={appState} setAppState={setAppState} {...props} />
        </StyledTrackVisibility>


        <RefDivider ref={iWroteYouASongRef} />
        <StyledTrackVisibility  {...props} partialVisibility>
            <IWroteYouASong appState={appState} setAppState={setAppState} {...props} />
        </StyledTrackVisibility>


        <RefDivider ref={hieronymusRef} />
        <StyledTrackVisibility partialVisibility {...props} >
            <Hieronymus {...props} appState={appState} setAppState={setAppState} />
        </StyledTrackVisibility>

        <RefDivider ref={trashCanRef} />
        <StyledTrackVisibility partialVisibility {...props} >
            <TrashCanDream {...props} appState={appState} setAppState={setAppState} />
        </StyledTrackVisibility>

        <RefDivider ref={equrlityRef} />
        <StyledTrackVisibility partialVisibility {...props} >
            <Equrlity {...props} appState={appState} setAppState={setAppState} />
        </StyledTrackVisibility>


        <RefDivider ref={advocacyRef} />
        <StyledTrackVisibility partialVisibility {...props} >
            <Advocacy {...props} appState={appState} setAppState={setAppState} />
        </StyledTrackVisibility>




        {/* <Footer /> */}

        <div>
            <Divider hidden />
            <Divider hidden />
            <div style={{ background: "rgb(230, 230, 230)" }}>

                <Container text>

                    <FooterContainer >
                        <Divider hidden />
                        <FooterMenu compact secondary>
                            < Menu.Item
                                name='wrote'
                                onClick={() => window.scroll({ top: iWroteYouASongRef.current.offsetTop, behavior: 'smooth' })}
                                content='I Wrote You A Song'
                            />
                            < Menu.Item
                                name='hieronymus'
                                onClick={() => window.scroll({ top: hieronymusRef.current.offsetTop, behavior: 'smooth' })}
                                content='Hieronymus Trio'
                            />
                            < Menu.Item
                                name='trashCanDream'
                                onClick={() => window.scroll({ top: trashCanRef.current.offsetTop, behavior: 'smooth' })}
                                content='Trash Can Dream'
                            />





                        </FooterMenu>
                        <FooterMenu compact secondary>
                            < Menu.Item
                                name='equrlity'
                                onClick={() => window.scroll({ top: equrlityRef.current.offsetTop, behavior: 'smooth' })}
                                content='Equrlity'
                            />
                            < Menu.Item
                                name='advocacy'
                                onClick={() => window.scroll({ top: advocacyRef.current.offsetTop, behavior: 'smooth' })}
                                content='Advocacy'
                            />




                        </FooterMenu>

                        <Header as='h6' icon='copyright' content={(new Date()).getFullYear() + " Inner Wisdom"} />

                        <Divider hidden />
                    </FooterContainer>

                </Container>
            </div>

        </div>
    </>
}
