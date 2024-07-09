import React, { Component } from "react";

export default class DisplayCard extends Component {
  render() {
    const { bgc, Name, State, Country, District } = this.props.Data;
    return (
      <div className="Card">
        <img className="Images" src="https://via.placeholder.com/150" alt="" />
        <h1>Name :{Name}</h1>
        <div className="info">
          <h2>State :{State}</h2>
          <h2>Country :{Country}</h2>
          <h2>District :{District}</h2>
        </div>
      </div>
    );
  }
}
