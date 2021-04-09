import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuoteForm = (props) => {
    const { addItem } = props
    const [ name, setName ] = useState('')
    const [ body, setBody ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: uuidv4(), 
            name: name,
            body: body
        }
        addItem(formData)

        setName('')
        setBody('')
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    return (
        <div>
            <h2>Add Quote</h2>
            <form onSubmit = {handleSubmit}>
                <label>Name</label> <br />
                <input type="text" value = {name} onChange = {handleNameChange} /> <br />
                <label>Body</label> <br />
                <textarea value = {body} onChange={handleBodyChange}></textarea> <br />

                <input type = "submit" value = "Save" />
            </form>
        </div>
    )
}

export default QuoteForm