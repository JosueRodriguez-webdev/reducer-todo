import React, { useReducer, useState } from 'react'

//reducers
import { initialState, noteReducer } from '../reducers/index'

//import for material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form() {
    const [newNote, setNewNote] = useState('')
    const [state, dispatch] = useReducer(noteReducer, initialState)

    // handle change function
    const handleChanges = (e) => {
        setNewNote(e.target.value)
    }

    //handle submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            note: newNote,
            noteToggle: false,
            id: Date.now()
        })
        setNewNote('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChanges} value={newNote} id="outlined-basic" label="Insert Note Here..." variant="outlined" />

                <Button type='submit' variant="outlined" color="primary">
                    Add Note
                </Button>
            </form>
            <Button variant="outlined" color="secondary">
                    Delete Note(s)
                </Button>
            
        </div>
    )
}
