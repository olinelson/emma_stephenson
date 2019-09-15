import React, { useState } from 'react'
import { AlbumGrid } from './CustomComponents'
import AlbumInfo from './AlbumInfo'
import { Button, Pre, Collapse, Tabs, Tab } from '@blueprintjs/core'
export default function Music() {

    const [selectedTab, setSelectedTab] = useState("ng")



    return (
        <div>
            <h1>Music</h1>
            <Tabs id="TabsExample" onChange={(e) => setSelectedTab(e)} selectedTabId={selectedTab}>
                <Tab id="WTROTWB" title={<img alt="I wrote you a song album cover" src="https://via.placeholder.com/200" />} panel={<AlbumInfo album="WTROTWB" />} />
                <Tab id="abc" title={<img alt="I wrote you a song album cover" src="https://via.placeholder.com/200" />} panel={<AlbumInfo album="abc" />} />
                <Tab id="def" title={<img alt="I wrote you a song album cover" src="https://via.placeholder.com/200" />} panel={<AlbumInfo album="def" />} />

                <Tabs.Expander />
            </Tabs>

        </div>
    )
}
