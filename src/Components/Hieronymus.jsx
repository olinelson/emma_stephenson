import React from 'react'
import { Divider, Item, Header } from "semantic-ui-react"

export default function Hieronymus() {
    return <>
        <Divider hidden />
        <Divider hidden />
        <div style={{ position: "sticky", top: "0", zIndex: 1, background: "white" }}>
            <Header textAlign="center" as="h1" content="I Wrote You A Song" />
        </div>
        <Divider />
        <Item.Group relaxed="very" items={items} />
        <Divider hidden />
        <Divider hidden />
    </>
}
