import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import { Button, Menu, Header, Sidebar, Icon, Image, Item, Accordion, Divider } from 'semantic-ui-react'



// components
import News from './Components/News';
import Music from './Components/Music';
import { Container, AlbumCard, IconRow, TidalLogo, StickyImage } from './Components/CustomComponents'
import Equrlity from './Components/Equrlity';
import Advocacy from './Advocacy';
import Footer from './Footer';
import IWroteYouASong from './Components/IWroteYouASong';

function App() {




  return (
    <div className="App">


      <Menu>
        <Menu.Menu position="left">
          {/* <NavbarHeading>Blueprint</NavbarHeading> */}
          {/* <NavbarDivider /> */}
          <Menu.Item content="I Wrote You A Song" />
          <Menu.Item content="Hieronymus Trio Feat. Gian Slater" />
          <Menu.Item content="Trash Can Dream" />
          <Menu.Item content="Equrlity" />
          <Menu.Item content="Advocacy" />

        </Menu.Menu>
        <Menu.Menu position="right">
          {/* <NavbarHeading>Blueprint</NavbarHeading> */}
          {/* <NavbarDivider /> */}
          <Menu.Item icon="facebook" />
          <Menu.Item icon="instagram" />
          <Menu.Item icon="youtube" />
          <Menu.Item icon="twitter" />
          {/* <Button className={Classes.MINIMAL} icon="facebook" text="Spotify" />
          <Button className={Classes.MINIMAL} icon="facebook" text="Equrlity" />
 */}


        </Menu.Menu>
      </Menu>



      <Container className="ui container">
        <Header as="h1" style={{ fontSize: "4rem" }} textAlign="center">Emma Stephenson</Header>

        <News />

        <IWroteYouASong />




        <Equrlity />
        <Advocacy />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
