
import React, { Component } from 'react';
class Card extends Component {
  render() {
    const cardstyle = {
      width: 200,
      display: "inline-block",
      margin: 10,
      backgroundColor: this.props.color
    }
    return (
      <div style={cardstyle}>
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

