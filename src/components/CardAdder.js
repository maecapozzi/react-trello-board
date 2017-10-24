import React, { Component } from 'react';

class CardAdder extends Component {
  constructor () {
    super()

    this.state = {
      result: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const result = window.prompt('Please add a card')
    this.setState({ result })
  }

  render() {
    return (
      <div className="column">
        <button onClick={this.handleClick}>Add a card</button>
      </div>
    );
  }
}

export default CardAdder;
