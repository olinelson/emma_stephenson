import React, { useState } from 'react'
import { FeatureAlbumCard, FeatureAlbumCardText, SpotifyLogo, AppleMusicLogo, TidalLogo } from './CustomComponents'
import { Tooltip, Classes, Dialog, Button, AnchorButton, Intent } from "@blueprintjs/core"
import { GRID } from '@blueprintjs/icons/lib/esm/generated/iconNames'

export default function News() {
    const [listenModalOpen, setListenModalOpen] = useState(false)



    return (
        <FeatureAlbumCard>
            <img alt="I wrote you a song album cover" src="https://via.placeholder.com/350" />
            <FeatureAlbumCardText>
                {/* <h1 style={{ margin: 0, marginTop: "-.5rem" }}>I Wrote You A Song</h1> */}
                <p>Songs by Emma Grace Stephenson featuring six astonishing Australian vocalists, recorded at Engine Room Audio NYC. Produced by Darren Fewins.</p>
                <Button large onClick={() => setListenModalOpen(true)} text="listen" />

                <Dialog
                    isOpen={listenModalOpen}
                    // className={this.props.data.themeName}
                    icon="info-sign"
                    onClose={() => setListenModalOpen(false)}
                // title="Palantir Foundry"
                >
                    <div className={Classes.DIALOG_BODY} style={{ display: "grid", justifyItems: "center", gridGap: "1rem", gridTemplateColumns: "repeat( auto-fit, minmax(6rem, 1fr) )" }}>
                        <AnchorButton
                            minimal
                            intent={Intent.PRIMARY}
                            href="https://www.palantir.com/palantir-foundry/"
                            target="_blank"
                            text="Spotify"
                            icon={<SpotifyLogo />}
                        />
                        <AnchorButton
                            minimal
                            intent={Intent.PRIMARY}
                            href="https://www.palantir.com/palantir-foundry/"
                            target="_blank"
                            text="Apple Music"
                            icon={<AppleMusicLogo />}
                        />
                        <AnchorButton
                            minimal
                            intent={Intent.PRIMARY}
                            href="https://www.palantir.com/palantir-foundry/"
                            target="_blank"
                            text="equrlity"

                        />
                        <AnchorButton
                            minimal
                            intent={Intent.PRIMARY}
                            href="https://www.palantir.com/palantir-foundry/"
                            target="_blank"
                            text="tidal"
                            icon={<TidalLogo />}
                        />
                        <AnchorButton
                            minimal
                            intent={Intent.PRIMARY}
                            href="https://www.palantir.com/palantir-foundry/"
                            target="_blank"
                            text="deezer"
                        />

                    </div>
                </Dialog>
            </FeatureAlbumCardText>

            <div>

            </div>

        </FeatureAlbumCard >
    )
}
