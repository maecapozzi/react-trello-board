import React, { Component } from 'react';
import Column from './Column'

class Board extends Component {
  constructor () {
    super ()

    this.state = {
      columns: [{name: "first column"}, {name: "second column"}, {name: "third column"}, {name: "fourth column"}]
    }
  }
  render() {
    return (
      <div className="board">
        {this.state.columns.map(column => {
          return <Column name={column.name} />
        })}
      </div>
    );
  }
}

export default Board;
