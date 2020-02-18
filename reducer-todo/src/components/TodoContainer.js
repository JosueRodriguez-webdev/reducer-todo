import React, { useReducer, useState } from 'react'

import Form from './Form'
import {DisplayTodoList} from './DisplayTodoList'

//reducers
import { initialState, noteReducer } from '../reducers/index'

export default function TodoContainer() {

    const [newNote, setNewNote] = useState('')
    const [state, dispatch] = useReducer(noteReducer, initialState)
    console.log(`console logging state in form.js`, state)

    //handle submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_NOTE', payload: newNote})
        setNewNote('')
    }

    return (
        <div>
            <p>In the container</p>
            <Form newNote={newNote} setNewNote={setNewNote} sendReqToReducer={dispatch} handleSubmit={handleSubmit}/>
            <DisplayTodoList/>
        </div>
    )
}
