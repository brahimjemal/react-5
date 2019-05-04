import React, { Component } from 'react';
class City extends Component {
  render() {
    const citystyle = {
        margin : 10,
        display : "flex",
        justifyContent: "center",
        flexDirection :"column",
        alignItems : "center",
        backgroundColor: this.props.color
      }
    return (
      <div style={citystyle}>
      <img src={this.props.img}/>
        {/* <img>{this.props.img}</img> */}
        <p>{this.props.para}</p>
        </div>
    )
  }
}

export default City;
