import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({ Task, deleteTodo, editTodo }) => {   

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    return (
        <div className="Todo">
            <p>{Task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(Task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(Task.id)} />
            </div>
        </div>


    )
}
