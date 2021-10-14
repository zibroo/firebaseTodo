import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../context/MainContext';

const List = () => {
    const { getTodos, todos, deleteTask } = useContext(mainContext)

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>

            {
                todos ? (
                    <ul>
                        {
                            todos.map(item => (
                                <li key={item.todo.id}>
                                    {item.todo.title}
                                    <button onClick={() => { deleteTask(item.docId) }}>
                                        Del
                                    </button>
                                    <Link to={`/update/${item.docId}`}>

                                        <button onClick={() => { }}>
                                            Edit
                                        </button>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                ) : (null)
            }


        </div>
    );
};

export default List;