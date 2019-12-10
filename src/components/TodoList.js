import React from 'react';

import { List, Divider, Button } from 'semantic-ui-react'
import TodoItem from './TodoItem'

const TodoList = ({ todoItems, completeTask }) => {

    return (
        <>
        <List divided relaxed>
            {
                todoItems.map(item => (
                    <TodoItem key={item.id} task={item} completeTask={completeTask} />
                ))
            }
        </List>
        <Divider />
        <Button onClick={() => completeTask( {type: "CLEAN_UP" })}>Clear Completed</Button>
        </>
    )
}

export default TodoList;