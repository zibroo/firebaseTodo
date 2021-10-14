import React, { useContext, useState } from 'react';
import { mainContext } from '../context/MainContext';

const Add = () => {

    const { addTodo } = useContext(mainContext)

    const [todo, setTodo] = useState({
        id: Date.now(),
        title: ''
    })

    function handleChange(e) {
        setTodo({
            ...todo,
            title: e.target.value
        })
    }

    //add
    function handleClick() {
        addTodo(todo);
        setTodo({
            id: Date.now(),
            title: '',
        })
    }

    return (
        <div>
            <input value={todo.title} onChange={handleChange} type='text' />
            <button onClick={handleClick}>ADD</button>

        </div>
    );
};

export default Add;