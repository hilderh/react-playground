import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((users) => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <CardList users={this.state.users}></CardList>
      </div>
    );
  }
}

export default App;
