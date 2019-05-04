import React, { Component } from 'react';
class City extends Component {
  render() {
    return (
      <div className="city-style" style={{backgroundColor: this.props.color}}>
      <img src={this.props.img}/>
        {/* <img>{this.props.img}</img> */}
        <p>{this.props.para}</p>
        </div>
 

    )
  }
}

export default City;
