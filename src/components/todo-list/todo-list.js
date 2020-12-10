import React from 'react'
import ToDoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const ToDoList = ({todoData, onDelete1}) => {

    const element = todoData.map((item) => {

        const {id, ...itemprops} = item

         return (
            <li key={id}
            className="todo-list list-group-item "><ToDoListItem {... itemprops}
            onDelete2={() => onDelete1(id)}/></li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {element}
        </ul>
    )
}

export default ToDoList