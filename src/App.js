import React from 'react';
import './App.css';
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
  CollapsibleList,
  MenuItem
} from "@blueprintjs/core";

// components
import News from './Components/News';
import Music from './Components/Music';
import { Container } from './Components/CustomComponents'
import Equrlity from './Components/Equrlity';
import Advocacy from './Advocacy';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          {/* <NavbarHeading>Blueprint</NavbarHeading> */}
          {/* <NavbarDivider /> */}
          <Button className={Classes.MINIMAL} text="I Wrote You A Song" />
          <Button className={Classes.MINIMAL} text="Music" />
          <Button className={Classes.MINIMAL} text="Equrlity" />
          <Button className={Classes.MINIMAL} text="Advocacy" />

        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          {/* <NavbarHeading>Blueprint</NavbarHeading> */}
          {/* <NavbarDivider /> */}
          <Button className={Classes.MINIMAL} icon="facebook" text="Facebook" />
          <Button className={Classes.MINIMAL} icon="facebook" text="Instagram" />
          <Button className={Classes.MINIMAL} icon="facebook" text="Youtube" />
          {/* <Button className={Classes.MINIMAL} icon="facebook" text="Spotify" />
          <Button className={Classes.MINIMAL} icon="facebook" text="Equrlity" />
 */}


        </NavbarGroup>
      </Navbar>



      <Container className="ui container">
        <h1 style={{ justifySelf: "center", fontSize: "4rem" }}>Emma Stephenson</h1>

        <News />
        <Music />
        <Equrlity />
        <Advocacy />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
