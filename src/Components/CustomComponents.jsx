import styled from "styled-components"
import React from 'react'
import TrackVisibility from 'react-on-screen';
import { Image, Header, Menu, Icon } from 'semantic-ui-react'

export const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    margin: 0 15px;
`

export const FeatureAlbumCard = styled.div`
    justify-items: center;
    display: grid;
    // grid-template-columns: 1fr 3fr;
    grid-gap: 1rem;
`
export const FeatureAlbumCardText = styled.div`
    display: grid;
    justify-items: center;
    max-width: 35rem;
    text-align: center;
`
export const AlbumCard = styled.div`
    h4{
        margin: 0;
    }
    .ui.secondary.menu{
        margin: 0;
    }
    display: grid;
    grid-gap: .5rem;
    grid-template-rows: 200px 1.5rem auto 1fr;

`
export const IconRow = styled.div`
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(4, auto) 1fr;
    grid-gap: 1rem;
`

export const StickyImage = styled(Image)`
img{
    position: sticky;
    position: -webkit-sticky;
    top: 4rem;



}
 @media (max-width: 768px) {

    display: none !important;


}
`
export const MobileStickyImage = styled.img`
    position: sticky;
    position: -webkit-sticky;
    top: 4rem;
    width: 100%;
    height:auto;
    display: none;
    z-index: -1;

 @media (max-width: 768px) {

    display: block;


}
`

export const Grid = styled.div`
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat( auto-fit, minmax(${props => props.min}, ${props => props.max}) );
    grid-gap: ${props => props.gridGap || '1rem'} ;

`

export const Section = styled(Container)`
    min-height: 95vh;
    display: grid;
    align-content: center;
    // border: 1px solid pink;
    margin-top: 0;
    margin-bottom: 0;
`
export const SectionHeader = styled(Header)`
   font-size: 3rem !important;
   text-align: center;
`

export const StyledTrackVisibility = styled(TrackVisibility)`
    margin-bottom: 3rem;
`

export const RefDivider = styled.div`
    height: 5hv;
    min-height: 3rem;
`
export const FooterContainer = styled.div`
        display: grid;
        justify-items: center;
        background: #CCCCCC;
    `
export const FooterMenu = styled(Menu)`
        // margin: 0 !important;
        // margin-bottom: 0 !important;
        // font-size: .9rem !important;
    `

export const NonMobileMenuBar = styled(Menu)`
        position: sticky;
        top: 0;
        z-index: 100;
        background: white !important;


        @media (max-width: 870px) {
         visibility: hidden ;
        }
    `
export const MobileHamburgerIcon = styled(Icon)`
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 50;
        @media (min-width: 870px) {
         visibility: hidden ;
        }
`



export const TidalLogo = () => <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "2rem", height: "2rem", marginBottom: "-.5rem" }} viewBox="0 0 1453 707"><path fill="currentColor" stroke="#000" strokeWidth=".094" d="M596.8 0h.8c6.102 7 13 13.2 19.5 19.9l44.2 44.2v.8c-21.398 21.3-42.7 42.8-64.1 64.1-21.5-21.4-42.9-42.9-64.4-64.3 1.102-2.1 3.2-3.5 4.8-5.2C557.3 39.6 577.3 20 596.8 0zM725.8 0h.8c.602.9 1.2 1.7 2 2.5 20.7 20.5 41.102 41.3 62 61.7-.5 1.2-1.6 2-2.5 2.9-20.698 20.6-41.3 41.3-62 61.9-21.6-21.3-42.8-43-64.5-64.2 21-21.9 43.1-43 64.2-64.8zM854.8 0h.8c4 4.8 8.7 8.9 13 13.4 16.2 16.2 32.302 32.3 48.5 48.5.802.9 2.102 1.7 2.4 3-21.7 21.1-42.7 43-64.5 64.1l-61.5-61.5c-1-1.1-2.3-1.9-2.8-3.3C801.6 53.6 812.2 42.7 823 32c10.6-10.7 21.4-21.1 31.8-32zM662.5 192.5c21.1-21.1 42.3-42.2 63.4-63.4l.898.4c21.2 21.3 42.4 42.6 63.8 63.7-.698 1.6-2.198 2.5-3.3 3.8-15.398 15.3-30.8 30.8-46.2 46.1-5 4.8-9.8 10.2-14.898 14.7-7.3-6.6-14-14-21.102-20.8-14.398-14.4-28.698-28.8-43.198-43.1.2-.4.4-1 .6-1.4zM0 469.9h192.4c.1 15.398.1 30.8 0 46.1h-69.3v182c-.1 3 .2 6-.4 9H69.2c.2-63.7.1-127.3.1-191H0v-46.1zM352.9 469.9c18 0 36 0 54 .1-.1 79 .2 158-.2 237H353c-.3-21-.1-42-.2-63 .1-58 0-116 .1-174.1zM1305 469.9c18 0 36 0 54 .1v189.4c31.3.198 62.7.1 94 .1V707h-147.9c-.3-79 0-158-.1-237.1zM797.4 549.4c-5.4-18.602-15.9-35.5-30.5-48.2-19.3-17.1-44.5-26.4-69.8-29.7-14.3-2.1-28.8-1.5-43.198-1.6h-63.9c-1.2 0-2.5.1-3.7.3.3 78.3 0 156.6.2 234.898-.1.5-.2 1.4-.3 1.9H678.6c8.302-1.5 16.802-1.4 25-3.2 28-5.1 54.9-19 73.2-41.1 13.5-16 21.8-36.102 24.5-56.8 2.4-18.898 1.4-38.298-3.9-56.498zm-60.9 78.7c-6.7 10.7-16.6 19.2-28.1 24.4-10.4 4.8-21.9 7-33.302 7.3-12 .102-24 0-36 .102-.6-13.302-.1-26.602-.3-39.9 0-34.7 0-69.3.102-104H676c18.6.4 37.5 6.8 51 20 12.1 11.7 18.9 28.2 20 44.9 1.1 16.298-1.9 33.198-10.5 47.198zM1138.6 651.2c-22.6-54.9-45.1-109.9-67.898-164.7-2.102-5.5-4.301-11.1-6.801-16.4-18.601-.3-37.199-.3-55.801 0-31.8 76.5-63.6 153-95.398 229.4-1 2.5-2.2 4.9-2.7 7.5h57.5c5.7-15.8 11.8-31.4 17.5-47.2 32.6-.5 65.3-.1 98-.2 1.7-.5 2.2 1.302 2.6 2.5 5.5 15 11.102 29.9 16.5 44.9h59.302c-7.204-18.8-15.204-37.2-22.804-55.8zm-138.4-33.5c-.3-2.102 1-3.9 1.6-5.8 10.9-28.5 22.102-57 32.9-85.5.2-.102.6-.2.8-.2 11.3 30 22.8 59.898 34.2 89.898 0 .4.1 1.2.1 1.602-23.2-.2-46.4-.2-69.6 0z" /></svg>
