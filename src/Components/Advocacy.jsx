import React, { useEffect } from 'react'
import { Grid } from './CustomComponents'

export default function Advocacy(props) {

    useEffect(() => {
        if (props.isVisible === true && props.appState.routesInView["/advocacy"] !== true) props.setAppState({ ...props.appState, routesInView: { ...props.appState.routesInView, "/advocacy": true } })
        if (props.isVisible === false && props.appState.routesInView["/advocacy"] !== false) props.setAppState({ ...props.appState, routesInView: { ...props.appState.routesInView, "/advocacy": false } })


    }, [props.isVisable, props.history, props])



    return (
        <div>
            <h1>Advocacy</h1>

        </div>
    )
}
