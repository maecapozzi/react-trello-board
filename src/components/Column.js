import React, { Component } from 'react';
import Card from './Card'
import ColumnName from './ColumnName'

class Column extends Component {
  constructor () {
    super ()

    this.state = {
      cards: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const cards = this.state.cards;
    const result = window.prompt('Please add a card');
    if (result != null) {
      cards.push(result)
      this.setState({ cards })
    }
  }

  render() {
    return (
      <div className="column">
        {console.log(this.props.name)}
        <ColumnName name={this.props.name} className="column-name"/>
        {this.state.cards.map((card) => {
          return <Card name={card} />
        })}
        <button className="column__button" onClick={this.handleClick}>Add a card</button>
      </div>
    );
  }
}

export default Column;
