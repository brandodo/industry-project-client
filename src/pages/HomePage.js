import React, { Component } from "react";
import amazed from "../assets/images/amazed.gif";

export default class HomePage extends Component {
  render() {
    return (
      <main className="homepage">
        <h2 className="homepage__headerText">This is the Home Page</h2>
        <img src={amazed} alt="amazed-face" />
      </main>
    );
  }
}
