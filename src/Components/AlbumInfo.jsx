import React, { useState } from 'react'
import { Button, AnchorButton, Collapse, Pre, Intent, Tabs, Tab } from '@blueprintjs/core'
import { SpotifyLogo, AppleMusicLogo, TidalLogo } from './CustomComponents'
import { GRID } from '@blueprintjs/icons/lib/esm/generated/iconContents'
export default function AlbumCard(props) {

    switch (props.album) {
        case "WTROTWB":
            return <div>
                <h4>Album Info</h4>
                <p>Hello this is info about the hting</p>
            </div>
        case "abc":
            return <div>
                <h4>Album Info</h4>
                <p>Hello this is info about the hting</p>
            </div>
        case "def":
            return <div>
                <h4>Album Info</h4>
                <p>Hello this is info about the hting</p>
            </div>
        case "hij":
            return <div>
                <h4>Album Info</h4>
                <p>Hello this is info about the hting</p>
            </div>

        default:
            return null
    }

}
