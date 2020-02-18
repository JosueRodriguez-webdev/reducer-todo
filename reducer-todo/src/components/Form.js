import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form() {

    return (
        <div>
            <form>
                <TextField id="outlined-basic" label="Insert Note Here..." variant="outlined" />

                <Button variant="outlined" color="primary">
                    Add Note
                </Button>
                <Button variant="outlined" color="secondary">
                    Delete Note(s)
                </Button>

            </form>
            
        </div>
    )
}
