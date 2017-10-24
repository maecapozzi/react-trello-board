import React, { Component } from 'react';

class ColumnName extends Component {
  render() {
    return (
      <div className="column-name">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default ColumnName;
