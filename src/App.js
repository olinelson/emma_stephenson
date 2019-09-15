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
} from "@blueprintjs/core";

// components
import News from './Components/News';
import { Container } from './Components/CustomComponents'

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Blueprint</NavbarHeading>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
          <Button className={Classes.MINIMAL} icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>



      <Container>
        <h1 style={{ justifySelf: "center", fontSize: "4rem" }}>Emma Stephenson</h1>

        <News />
        <h1>Music</h1>
        <h1>Equrlity</h1>
        <h1>Advocacy</h1>
      </Container>
    </div>
  );
}

export default App;
