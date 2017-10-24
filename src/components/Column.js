import React, { Component } from 'react';
import Card from './Card'
import ColumnName from './ColumnName'

class Column extends Component {
  constructor () {
    super ()

    this.state = {
      cards: ['first', 'second']
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const cards = [];
    const result = window.prompt('Please add a card');
    if (result != null) {
      cards.push(this.state.cards);
      cards.push(<Card name={result} />)
      this.setState({ cards })
    }
  }

  render() {
    return (
      <div className="column">
        <ColumnName className="column-name"/>
        {this.state.cards.map((card) => {
          return <Card name={card} />
        })}
        <button onClick={this.handleClick}>Add a card</button>
      </div>
    );
  }
}

export default Column;
