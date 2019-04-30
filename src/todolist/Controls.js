import React, { Component } from 'react'
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

class Controls extends Component {
  state = {
    newItem: '',
    errorMessage: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.newItem) {
      this.props.add(this.state.newItem)
      this.setState({
        newItem: '',
        errorMessage: ''
      })
    }
    else {
      this.setState({
        errorMessage: 'Please enter some valid text'
      })
    }
  }

  render() {
    return (
      <div>
        <h3>Add something to the list:</h3>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col xs="8">
              <FormGroup>
                <Input
                  type="text"
                  value={this.state.newItem}
                  onChange={(e) => { this.setState({ newItem: e.target.value, errorMessage: '' }) }}
                  placeholder="What do you need to do?"
                />
              </FormGroup>
            </Col>
            <Col xs="2">
              <Button color="primary" type="submit">Add</Button>
            </Col>
            <Col xs="2">
              <Button color="danger" onClick={this.props.clear}>Clear</Button>
            </Col>
          </Row>
        </Form>
        <p className="red">{this.state.errorMessage}</p>
      </div>
    )
  }
}

export default Controls
