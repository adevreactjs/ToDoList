import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import ToDoList from './components/todo-list'
import ItemStatusFilter from './components/item-status-filter'
import './index.css'

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1},
            { label: 'Make Awesome App', important: true, id: 2},
            { label: 'Have a lunch', important: false, id: 3}
          ]
        } 

    onDelete = (id) => {
        this.setState(({todoData}) => {
           const idx = todoData.findIndex((el) => el.id === id)
           todoData.splice(idx, 1)

            const newArray = [... todoData.slice(0, idx), 
                              ... todoData.slice(idx + 1)]
            return {
                todoData: newArray
            } 
        })
    }

    render() {

        return (
            <div className="todo-app">
                <AppHeader toDo={1}
                            done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                
                <ToDoList 
                todoData={this.state.todoData}
                onDelete1 ={this.onDelete} />
             </div>
        )
        
    }
}

    

 



ReactDOM.render(<App/>, document.getElementById('root'))