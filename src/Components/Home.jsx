import React, { useRef, useEffect, useState } from 'react'

import News from './News';
import Music from './Music';
import { Container, AlbumCard, IconRow, TidalLogo, StickyImage, MobileStickyImage } from './CustomComponents'
import Equrlity from './Equrlity';
import Advocacy from './Advocacy';
import Footer from './Footer';
import IWroteYouASong from './IWroteYouASong';

import { Button, Menu, Header, Sidebar, Icon, Items, Image, Item, Accordion, Divider } from 'semantic-ui-react'
import Hieronymus from './Hieronymus';



import TrackVisibility from 'react-on-screen';

export default function Home(props) {


    const iWroteYouASongRef = useRef(null)
    const equrlityRef = useRef(null)
    const advocacyRef = useRef(null)
    const hieronymusRef = useRef(null)

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
            case '/hieronymus':
                window.scroll({ top: hieronymusRef.current.offsetTop, behavior: 'smooth' })
                break;

            case '/advocacy':
                window.scroll({ top: advocacyRef.current.offsetTop, behavior: 'smooth' })
                break;
            default:
        }
    }, [])

    return <>
        <Menu pointing style={{ backgroundColor: "white" }} fixed="top" secondary>
            <Menu.Menu position="left">
                <Menu.Item active={props.location.pathname === "/i_wrote_you_a_song"} onClick={() => window.scroll({ top: iWroteYouASongRef.current.offsetTop, behavior: 'smooth' })} content="I Wrote You A Song" />
                <Menu.Item active={props.location.pathname === "/hieronymus"} onClick={() => window.scroll({ top: hieronymusRef.current.offsetTop, behavior: 'smooth' })} content="Hieronymus Trio Feat. Gian Slater" />
                <Menu.Item active={props.location.pathname === "/trash_can_dream"} content="Trash Can Dream" />
                <Menu.Item active={props.location.pathname === "/equrlity"} onClick={() => window.scroll({ top: equrlityRef.current.offsetTop, behavior: 'smooth' })} content="Equrlity" />
                <Menu.Item active={props.location.pathname === "/advocacy"} onClick={() => window.scroll({ top: advocacyRef.current.offsetTop, behavior: 'smooth' })} content="Advocacy" />

            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu.Item icon="facebook" />
                <Menu.Item icon="instagram" />
                <Menu.Item icon="youtube" />
                <Menu.Item icon="twitter" />
            </Menu.Menu>
        </Menu>


        <Container>

            <TrackVisibility {...props} partialVisibility>
                <News appState={appState} setAppState={setAppState} {...props} />
            </TrackVisibility>


            <div ref={iWroteYouASongRef} />
            <TrackVisibility  {...props} partialVisibility>
                <IWroteYouASong appState={appState} setAppState={setAppState} {...props} />
            </TrackVisibility>


            <div ref={hieronymusRef} />
            <TrackVisibility partialVisibility {...props} >
                <Hieronymus {...props} appState={appState} setAppState={setAppState} />
            </TrackVisibility>

            <div ref={equrlityRef} />
            <TrackVisibility partialVisibility {...props} >
                <Equrlity {...props} appState={appState} setAppState={setAppState} />
            </TrackVisibility>


            <div ref={advocacyRef} />
            <TrackVisibility partialVisibility {...props} >
                <Advocacy {...props} appState={appState} setAppState={setAppState} />
            </TrackVisibility>



        </Container>
        <Footer />
    </>
}
