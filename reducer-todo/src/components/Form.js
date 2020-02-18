import React, { useReducer, useState } from 'react'

//reducers
import { initialState, noteReducer } from '../reducers/index'

//import for material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form() {
    const [userInput, setUserInput] = useState({
        newNote: ''
    })
    const [newNote, setNewNote] = useReducer(noteReducer, initialState)

    // handle change function
    const handleChanges = (e) => {
        setUserInput({newNote: e.target.value})
    }



    return (
        <div>
            <form>
                <TextField onChange={handleChanges} value={userInput.newNote}id="outlined-basic" label="Insert Note Here..." variant="outlined" />

                <Button variant="outlined" color="primary">
                    Add Note
                </Button>
            </form>
            <Button variant="outlined" color="secondary">
                    Delete Note(s)
                </Button>
            
        </div>
    )
}
