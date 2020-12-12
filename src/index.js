import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import ToDoList from './components/todo-list'
import ItemStatusFilter from './components/item-status-filter'
import ItemAddForm from './components/item-add-form'
import './index.css'

export default class App extends Component {

    maxId = 100
    state = {
        todoData: [
            this.createElement('Drink Coffee'),
            this.createElement('Make Awesome App'),
            this.createElement('Have a lunch')
          ]
        } 

    onDelete = (id) => {
        this.setState(({todoData}) => {
           const idx = todoData.findIndex((el) => el.id === id)
           todoData.splice(idx, 1)

            const newArray = [...todoData.slice(0, idx), 
                              ...todoData.slice(idx + 1)]
            return {
                todoData: newArray
            } 
        })
    }

    createElement(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }

    }

    addItem = (text) => {

        const newItem = {
            label: text,
            done: false,
            important: false,
            id: this.maxId++
        }

        this.setState(({todoData}) => {
            
            const newArray = [...todoData, newItem]

            return {
                todoData: newArray
            }
            
        }) 
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const oldItem = todoData[idx]
            const newItem = {...oldItem, done: !oldItem.done}

            const newArray = [...todoData.slice(0, idx), newItem,
                ...todoData.slice(idx + 1)]

                return {
                    todoData: newArray

                }
        })


    }
    onToggleImportant = (id) => {

        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const oldItem = todoData[idx]
            const newItem = {...oldItem, important: !oldItem.important}

            const newArray = [...todoData.slice(0, idx), newItem,
                ...todoData.slice(idx + 1)]

                return {
                    todoData: newArray

                }
        })
    }

    render() {

        const doneCount = this.state.todoData.filter((el) => el.done).length
        const toDoCount = this.state.todoData.length - doneCount

        return (
            <div className="todo-app">
                <AppHeader toDo={toDoCount}
                            done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                
                <ToDoList 
                todoData={this.state.todoData}
                onDelete1 ={this.onDelete} 
                onToggleDone ={this.onToggleDone}
                onToggleImportant ={this.onToggleImportant}
                />
                <ItemAddForm addItem ={this.addItem}/>
             </div>
        )
        
    }
}

    

 



ReactDOM.render(<App/>, document.getElementById('root'))