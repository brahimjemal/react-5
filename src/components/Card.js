
import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <div className="card-style" style={{backgroundColor: this.props.color}}>
        <h1>{this.props.titre}</h1>
        <div>
        <p>{this.props.para}</p>

        </div>
        <button>{this.props.button}</button>
      </div>
    )
  }
}

export default Card;
