import React, { useState } from 'react';

import {DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';

import { Form, Input, Button, Accordion, Icon, Divider } from 'semantic-ui-react'

const TodoForm = (props) => {
    const [taskText, setTaskText] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [tabIndex, setTabIndex] = useState(1);

    const handleTaskChange = e => {
        setTaskText(e.target.value);
    }

    const handleDateChange = (e, {name, value}) => {
        setTaskDate(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        //dispatch
        props.addTask({type: "ADD_TASK", payload: {taskText: taskText, taskDate: taskDate}}); 
        setTaskText('');
        setTaskDate('');
    }

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        //const { activeIndex} = tabIndex;
        const newIndex = tabIndex === index ? -1 : index

        setTabIndex(newIndex)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" action placeholder="New Task..." value={taskText} onChange={handleTaskChange}>
                <input />
                <Button type="submit" onClick={handleSubmit}>Add</Button>
            </Input>
            <Accordion>
                <Accordion.Title active={tabIndex === 0} index={0} onClick={handleClick}>
                    <Icon name="dropdown" />
                    Task Options
                </Accordion.Title>
                <Accordion.Content active={tabIndex === 0}>
                    <DateInput clearable clearIcon={<Icon name="remove" color="red" />} dateFormat="MM/DD/YYYY" name="date" placeholder="Complete By Date" value={taskDate} iconPosition="left" onChange={handleDateChange} />
                    <Divider />
                </Accordion.Content>
            </Accordion>
        </Form>
    )
}

export default TodoForm;