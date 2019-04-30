import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'
import TodoListItem from './TodoListItem'

class TodoList extends Component {
  render() {
    let todoitems = this.props.items.map((td, i) => {
      return <TodoListItem
        item={td}
        index={i}
        key={i}
        delete={this.props.delete}
        done={this.props.done}
      />
    })

    return (
      <div>
        <h3>My Current List</h3>
        <ListGroup>
          {todoitems}
        </ListGroup>
      </div>
    )
  }
}

export default TodoList
