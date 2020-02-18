import React, { useReducer, useState } from 'react'

//reducers
import { initialState, noteReducer } from '../reducers/index'

//import for material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form(props) {

    const handleChanges = (e) => {
        props.setNewNote(e.target.value)
    }

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <TextField onChange={handleChanges} value={props.newNote} id="outlined-basic" label="Insert Note Here..." variant="outlined" />

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
