import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import { Button, Menu, Header, Sidebar, Icon, Image, Item, Accordion, Divider } from 'semantic-ui-react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



// components
import News from './Components/News';
import Music from './Components/Music';
import { Container, AlbumCard, IconRow, TidalLogo, StickyImage } from './Components/CustomComponents'
import Equrlity from './Components/Equrlity';
// import Footer from './Footer';
import IWroteYouASong from './Components/IWroteYouASong';
import Home from './Components/Home';

function App() {




  return (
    <div className="App">

      <Router>
        <Route render={(props) => <Menu pointing secondary>
          <Menu.Menu position="left">
            <Menu.Item active={props.location.pathname === "/i_wrote_you_a_song"} onClick={() => props.history.push("/i_wrote_you_a_song")} content="I Wrote You A Song" />
            <Menu.Item active={props.location.pathname === "/hieronymust_trio"} onClick={() => props.history.push("/hieronymust_trio")} content="Hieronymus Trio Feat. Gian Slater" />
            <Menu.Item active={props.location.pathname === "/trash_can_dream"} onClick={() => props.history.push("/trash_can_dream")} content="Trash Can Dream" />
            <Menu.Item active={props.location.pathname === "/equrlity"} onClick={() => props.history.push("/equrlity")} content="Equrlity" />
            <Menu.Item active={props.location.pathname === "/advocacy"} onClick={() => props.history.push("/advocacy")} content="Advocacy" />

          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item icon="facebook" />
            <Menu.Item icon="instagram" />
            <Menu.Item icon="youtube" />
            <Menu.Item icon="twitter" />
          </Menu.Menu>
        </Menu>} />




        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
