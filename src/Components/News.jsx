import React, { useState } from 'react'
import { FeatureAlbumCard, FeatureAlbumCardText, SpotifyLogo, AppleMusicLogo, TidalLogo } from './CustomComponents'
import { Button, Modal, Menu, Container, Divider } from "semantic-ui-react"
export default function News() {



    return <>
        <Divider hidden />
        <Divider hidden />
        <FeatureAlbumCard>
            <img alt="I wrote you a song album cover" src="https://via.placeholder.com/350" />
            <FeatureAlbumCardText>
                {/* <h1 style={{ margin: 0, marginTop: "-.5rem" }}>I Wrote You A Song</h1> */}
                <p>Songs by Emma Grace Stephenson featuring six astonishing Australian vocalists, recorded at Engine Room Audio NYC. Produced by Darren Fewins.</p>
            </FeatureAlbumCardText>

            <Modal
                trigger={<Button size="massive" content="listen" />}
                header='Listen'
                content={<Container>
                    <Button

                        href="https://www.palantir.com/palantir-foundry/"
                        target="_blank"
                        content="Spotify"
                        icon='spotify'
                    />
                    <Button

                        href="https://www.palantir.com/palantir-foundry/"
                        target="_blank"
                        content="Apple Music"
                        icon='itunes'
                    />
                    <Button

                        href="https://www.palantir.com/palantir-foundry/"
                        target="_blank"
                        content="equrlity"

                    />
                    <Button

                        href="https://www.palantir.com/palantir-foundry/"
                        target="_blank"
                        content="tidal"
                    // icon={<TidalLogo />}
                    />
                    <Button

                        href="https://www.palantir.com/palantir-foundry/"
                        target="_blank"
                        content="deezer"
                    // icon="deezer"
                    /></Container>}
            // actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
            />
        </FeatureAlbumCard >
        <Divider hidden />
        <Divider hidden />
    </>

}
