import React from 'react'
import ReactDOM from 'react-dom'

const AppHeader = () => {
    return (
        <h1>ToDo List</h1>
    )
}

const SearchPanel = () => {
    return (
        <input placeholder='search'></input>
    )
}

const ItemList = () => {
    return (
        <ul>
        <li>Create React App</li>
        <li>Create React App</li>
        <li>Create React App</li>
    </ul>
    )
}

const App = () => {
    return (
        <div>
        <AppHeader/>
        <SearchPanel/>
        <ItemList/>
    </div>
    )
}



ReactDOM.render(<App/>, document.getElementById('root'))