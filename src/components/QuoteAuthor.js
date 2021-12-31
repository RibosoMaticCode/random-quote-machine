import React from 'react'

export default function QuoteAuthor(props) {
    return (
        <div id="author" className='quote-author text-end mb-5'>
            <span style={{ color: props.color}}>- {props.author}</span>
        </div>
    )
}
