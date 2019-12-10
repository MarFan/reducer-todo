import React, { useState } from 'react';

import { Form, Input, Button } from 'semantic-ui-react'

const TodoForm = (props) => {
    const [taskText, setTaskText] = useState('')

    const handleChange = e => {
        setTaskText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        //dispatch
        props.addTask({type: "ADD_TASK", payload: taskText}); 
        setTaskText('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" action placeholder="New Task..." value={taskText} onChange={handleChange}>
                <input />
                <Button type="submit" onClick={handleSubmit}>Add</Button>
            </Input>
        </Form>
    )
}

export default TodoForm;