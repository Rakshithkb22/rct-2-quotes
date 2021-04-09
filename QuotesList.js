import React from 'react'
import QuotesItem from './QuotesItem'

const QuotesList = (props) => {
    const { quotes } = props 
    return (
        <div>
            {
                quotes.length === 0 ? 
                (<div>
                    <h1>No quotes found</h1>
                    <p>Add your first quote</p>
                </div>) : (
                    <div>
                        <h1>My Quote - {quotes.length}</h1>
                        {quotes.map((quote) => {
                            return (
                                <QuotesItem key={quote.id} {...quote} />
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default QuotesList