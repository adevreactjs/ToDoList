import React, {Component} from 'react'
import './item-add-form.css'



export default class ItemAddForm extends Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        })

    }

    render() {
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
                <input type="text"
                className="form-control new-todo-label"
                placeholder="What to be done"
                onChange={this.onLabelChange}
                value={this.state.label}></input>
                <button className="btn btn-outline-secondary"
                type="submit"
                >Add</button>
            </form>
        )
    }
}