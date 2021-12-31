import React from 'react'

export default function QuoteButton(props) {
    return (
        <div id="new-quote">
            <button className='btn btn-text' onClick={props.onclick} style={{ backgroundColor: props.color}}>New quote</button>
        </div>
    )
}
