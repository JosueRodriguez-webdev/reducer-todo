import React from 'react'

import Form from './Form'
import DisplayTodoList from './DisplayTodoList'

export default function TodoContainer() {
    return (
        <div>
            <p>In the container</p>
            <Form/>
            <DisplayTodoList/>
        </div>
    )
}
