import React, { Component } from "react";
import "./App.css";
import AppRouter from "routes/app-route";

export default class App extends Component {
  render() {
    return (
      <>
        <AppRouter />
      </>
    );
  }
}
