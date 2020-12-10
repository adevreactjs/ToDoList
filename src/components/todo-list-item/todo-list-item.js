import React, { Component } from 'react'
import './todo-list-item.css'

export default class ToDoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !this.state.done
      }
    })
  }
  onBould = () => {
    this.setState((state) => {
      return {
        important: !this.state.important
      }
    })
  }

  render() {

    const {label} = this.props
    const {done, important} = this.state

  
    let classNames = 'todo-list-item'

    if(done) {
      classNames += ' done'
    } 

    if(important) {
      classNames += ' important'

    }



    return (

      

    <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
            {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onBould}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={this.props.onDelete2}>
          <i className="fa fa-trash" />
        </button>
    </span>
    )

  }
}



