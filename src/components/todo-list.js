import React from 'react'
import ToDoListItem from './todo-list-item'

const ToDoList = ({todoData}) => {

    const element = todoData.map((item) => {

        const {id, ...itemprops} = item
        console.log(itemprops)

         return (
            <li key={id}><ToDoListItem {... itemprops}
                              
                              /></li>
        )
    })

    return (
        <ul>
            {element}
        </ul>
    )
}

export default ToDoList