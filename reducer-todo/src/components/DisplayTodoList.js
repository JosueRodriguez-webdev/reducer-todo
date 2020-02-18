import React from 'react'

export const DisplayTodoList = ({ notes }) => {
    const { note, id } = notes
    return (
        <div>
            <p>{note}</p>
            
        </div>
    )
}

