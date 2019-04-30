import React, { Component } from 'react'

class Counter extends Component {
  render() {
    let message = `You have ${this.props.numItems} things left to do`
    if(this.props.numItems === 1) {
      message = 'JUST ONE MORE! KEEP GOING!'
    }
    else if(this.props.numItems <= 0) {
      message = 'ALL DONE! YESSSSSSS!'
    }

    return (
      <div className="counter">
        {message}
      </div>
    )
  }
}

export default Counter
