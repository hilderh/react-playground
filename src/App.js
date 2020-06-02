import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Nokmbre 1",
        },
        {
          name: "Nombre 2",
        },
        {
          name: "Nombre",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => (
          <h2>{user.name}</h2>
        ))}
      </div>
    );
  }
}

export default App;
