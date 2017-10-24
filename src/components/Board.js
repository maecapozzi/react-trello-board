import React, { Component } from 'react';
import Column from './Column'

class Board extends Component {
  constructor () {
    super ()

    this.state = {
      columns: [<Column />, <Column />, <Column />, <Column />]
    }
  }
  render() {
    return (
      <div className="board">
        {this.state.columns.map(column => {
          return column
        })}
      </div>
    );
  }
}

export default Board;
