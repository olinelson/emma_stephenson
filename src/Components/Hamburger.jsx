import React from 'react'
import { push as Effect } from 'react-burger-menu'
import { Menu } from 'semantic-ui-react'



export default function Hamburger(props) {
    return <Effect>
        <Menu vertical>
            <Menu.Item active={props.location.pathname === "/i_wrote_you_a_song"} onClick={() => window.scroll({ top: props.iWroteYouASongRef.current.offsetTop, behavior: 'smooth' })} content="I Wrote You A Song" />
            <Menu.Item active={props.location.pathname === "/hieronymus"} onClick={() => window.scroll({ top: props.hieronymusRef.current.offsetTop, behavior: 'smooth' })} content="Hieronymus Trio Feat. Gian Slater" />
            <Menu.Item active={props.location.pathname === "/trash_can_dream"} onClick={() => window.scroll({ top: props.trashCanRef.current.offsetTop, behavior: 'smooth' })} content="Trash Can Dream" />
            <Menu.Item active={props.location.pathname === "/equrlity"} onClick={() => window.scroll({ top: props.equrlityRef.current.offsetTop, behavior: 'smooth' })} content="Equrlity" />
            <Menu.Item active={props.location.pathname === "/advocacy"} onClick={() => window.scroll({ top: props.advocacyRef.current.offsetTop, behavior: 'smooth' })} content="Advocacy" />

        </Menu>
    </Effect>
}

// const Hamburger = React.forwardRef((props, ref) => {
//     return <Menu>
//         <h1 onClick={() => window.scroll({ top: props.hieronymusRef.current.offsetTop, behavior: 'smooth' })}> Hieronymus</h1>
//     </Menu>
// })

// export default Hamburger

