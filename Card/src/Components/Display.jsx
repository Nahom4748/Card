import React, { Component } from "react";
import DisplayCard from "./DisplayCard";
import Data from "../assets/CardData/CardData";
import "../style/style.css";

export default class extends Component {
  render() {
    return (
      <div>
        <div className="title">Card Using Class Component </div>
        <div className="Outer">
          {Data.map((element, i) => {
            return <DisplayCard Data={element} />;
          })}
        </div>
      </div>
    );
  }
}
