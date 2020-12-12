import React, { Component } from 'react'


export default class ItemStatusFilter extends Component {

    button = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]

    render() {

        const buttons = this.button.map(({name, label}) => {
            const isActive = this.props.filter === name
            const clazz = isActive ? "btn-info" : "btn-outline-secondary"
            return (
            <button type="button" className={`btn ${clazz}`} key={name}
            onClick ={() => this.props.onFilterChange(name)}>{label}</button>
            )
        })

        return (
            <div>
                {buttons}
            </div>
        )
    }
}


