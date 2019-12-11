import React from 'react';
import Moment from 'react-moment';

import { List, Icon, Label } from 'semantic-ui-react';

const TodoItem = ({ task, completeTask }) => {
    console.log(task.completedDate)
    return (
        <List.Item onClick={() => completeTask({ type: "COMPLETE_TASK", payload: task.id})}>
            <List.Icon name={`${task.completed ? 'checkmark box' : 'square outline'}`} size='large' />
            <List.Content className={`${task.completed ? 'completed' : ''}`}>
                <List.Header style={{fontSize: '1.5rem'}}>{task.item}</List.Header>
                    {
                        task.completeBy.length > 0 &&
                        <List.Description>
                            Complete By: {task.completeBy}
                        </List.Description>
                    }
                    {
                        task.tags.length > 0 &&
                        <>
                           Tags: {task.tags.map(tag => 
                               <Label>{tag}</Label>
                           )}
                        </>
                    }
                    {
                        task.completedDate.length > 0 &&
                        <Moment parse="MM/DD/YYYY" date={task.completedDate} />
                    }
            </List.Content>
        </List.Item>
    )
}

export default TodoItem;