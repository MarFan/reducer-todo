import React from 'react';

import { List, Icon } from 'semantic-ui-react';

const TodoItem = ({ task, completeTask }) => {
    return (
        <List.Item onClick={() => completeTask({ type: "COMPLETE_TASK", payload: task.id})}>
            <List.Icon name={`${task.completed ? 'checkmark box' : 'square outline'}`} />
            <List.Content className={`${task.completed ? 'completed' : ''}`}>{task.item}</List.Content>
        </List.Item>
    )
}

export default TodoItem;