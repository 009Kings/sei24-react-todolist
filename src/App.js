// Third-party modules
import React, { Component } from 'react'
import { Container } from 'reactstrap'

// Resources
import './App.css'

// Custom Components
import Controls from './todolist/Controls'
import Counter from './todolist/Counter'
import Header from './navigation/Header'
import TodoList from './todolist/TodoList'

class App extends Component {
  state = {
    items: [
      {text: 'Walk the dog', finished: false},
      {text: 'Do the laundry', finished: false},
      {text: 'Mow the lawn', finished: true},
      {text: 'Eat some broccoli', finished: false}
    ]
  }

  clear = () => {
    this.setState({ items: [] })
  }

  add = (newItem) => {
    this.setState({
      items: [...this.state.items, {text: newItem, finished: false}]
    })
  }

  delete = (index) => {
    let currentItems = [...this.state.items]
    currentItems.splice(index, 1)
    this.setState({ items: currentItems })
  }

  done = (index) => {
    let currentItems = [...this.state.items]
    currentItems[index].finished = !currentItems[index].finished
    this.setState({ items: currentItems })
  }

  render() {
    return (
      <div>
        <Header />
        <Counter numItems={this.state.items.length} />
        <Container>
          <Controls add={this.add} clear={this.clear} />
          <TodoList items={this.state.items} delete={this.delete} done={this.done} />
        </Container>
      </div>
    )
  }
}

export default App
