import React from 'react'
import { Container } from "./Components/CustomComponents"
import { ButtonGroup, Classes, Button, Alignment, Icon } from '@blueprintjs/core'

export default function Footer() {


    return <div>
        <div style={{ background: "rgb(230, 230, 230)", }}>

            <Container style={{ textAlign: "center", marginTop: "2rem", paddingTop: "2rem" }} class="ui container text">
                <ButtonGroup style={{ justifySelf: "center" }} align={Alignment.CENTER}>
                    {/* <NavbarHeading>Blueprint</NavbarHeading> */}
                    {/* <NavbarDivider /> */}
                    <Button className={Classes.MINIMAL} text="I Wrote You A Song" />
                    <Button className={Classes.MINIMAL} text="Music" />
                    <Button className={Classes.MINIMAL} text="Equrlity" />
                    <Button className={Classes.MINIMAL} text="Advocacy" />

                </ButtonGroup>

                <h4>© {(new Date()).getFullYear() + " Inner Wisdom"}</h4>




            </Container>
        </div>
    </div>

}
