import React, { useReducer, useState } from 'react'

import Form from './Form'
import {DisplayTodoList} from './DisplayTodoList'

//reducers
import { initialState, noteReducer } from '../reducers/index'

export default function TodoContainer() {

    // State for forms
    const [newNote, setNewNote] = useState('')


    const [state, dispatch] = useReducer(noteReducer, initialState)
    console.log(`this the state it updates too`,state)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_NOTE', payload: newNote})
        setNewNote('')
    }

    const deleteNote = (e) => {
        e.preventDefault();
        dispatch({type: 'DELETE_NOTE'})
    }

    const toggleNote = clickedId => {
        // console.log(`in the function`)
        const toggleItem = state.map((item) => {
            if(item.id === clickedId) {
                return [...state,{
                    noteToggle: !item.noteToggle
                }]
            } else {
                return item
            }

        })
        dispatch({type: 'NOTE_TOGGLE', noteToggle: toggleItem})
    }

    return (
        <div>
            <p>My note list:</p>

            <Form newNote={newNote} setNewNote={setNewNote} sendReqToReducer={dispatch} handleSubmit={handleSubmit} deleteNote={deleteNote}/>

            {state.map(notes => {
                return <DisplayTodoList key={notes.id} notes={notes} toggleNote={toggleNote}/>
            })}
        </div>
    )
}
