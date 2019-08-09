import React from 'react'

export default function Card(props) {
    const {state} = props

    return( state.stateName ? 
        <div className = 'card'>
            <h2> {state.stateName}</h2>
            <p> {state.history}</p>
            <a href = {state.url} target = {'_blank'}>{state.url ? "More Info" : null }</a> 
        </div> : null
    )
}