import React, { useState, useEffect } from 'react'
import QuotesList from './QuotesList'
import QuoteForm from './QuoteForm'

const QuotesContainer = (props) => {
    const [ quotes, setQuotes ] = useState([])

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)
    }, [])

    useEffect(() => {
        localStorage.setItem('quotes', JSON.stringify(quotes))
    }, [quotes])

    const addItem = (quote) => {
        const result = [...quotes, quote]
        setQuotes(result)
    }   

    return (
        <div>
            QuotesContainer
            <QuotesList quotes = {quotes}  />
            <QuoteForm addItem = {addItem} />
        </div>
    )
}


export default QuotesContainer