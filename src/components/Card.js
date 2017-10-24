import React, { Component } from 'react';

const Card = (props) => {
  return (
    <div className="card">
      {props.name}
    </div>
  );
}

export default Card;
