import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import { mainContext } from '../context/MainContext';

const Update = () => {
    const { getOneTodo, oneTodo, saveEditedTodo } = useContext(mainContext)
    const params = useParams()

    useEffect(() => {
        getOneTodo(params.docId)
    }, [])
    const [todoEdit, setTodoEdit] = useState(oneTodo)
    useEffect(() => {
        setTodoEdit(oneTodo)
    }, [oneTodo])

    function handleChange(e) {
        setTodoEdit({
            ...todoEdit,
            todo: {
                ...todoEdit.todo,
                title: e.target.value
            }
        })
    }
    const history = useHistory()
    function handleClick() {
        saveEditedTodo(todoEdit, params.docId)
        history.push('/')
    }
    return (
        <div>
            <Navbar />
            <div>
                {
                    todoEdit ? (
                        <>
                            <input onChange={handleChange} value={todoEdit.todo.title} type='text' />
                            <button
                                onClick={handleClick}
                            >Save</button>
                        </>
                    ) : (null)
                }
            </div>

        </div>
    );
};

export default Update;