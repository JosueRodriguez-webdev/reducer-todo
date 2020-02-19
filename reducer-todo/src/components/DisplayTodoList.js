import React from 'react'

export const DisplayTodoList = (props) => {

    return (
        <div>
            <p onClick={() => props.toggleNote(props.notes.id)}>{props.notes.note}</p>
            
        </div>
    )
}

