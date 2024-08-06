import React, { useState } from 'react';

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue.trim()]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') addTask();
                }}
                placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
