import React from 'react'

export default function QuoteText(props) {
    return (
        <div id="text" className='quote-text text-center mb-4' style={{ color: props.color}}>
            <i class="fas fa-quote-left"></i> {props.text}
        </div>
    )
}
