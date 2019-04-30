import React, { Component } from 'react'
import { Badge, Col, ListGroupItem, Row } from 'reactstrap'

class TodoListItem extends Component {
  render() {
    return (
      <ListGroupItem>
        <Row>
          <Col xs="9">
            {this.props.item.finished ? <del>{this.props.item.text}</del> : this.props.item.text}
          </Col>
          <Col xs="3">
            <Badge
              color="success"
              className="pointer"
              onClick={() => {this.props.done(this.props.index)}}
            >
              ✓
            </Badge>{' '}
            <Badge
              color="danger"
              className="pointer"
              onClick={() => {this.props.delete(this.props.index)}}>
              X
            </Badge>
          </Col>
        </Row>
      </ListGroupItem>
    )
  }
}

export default TodoListItem
