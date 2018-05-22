import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 render() {
  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button>Switch name</button>
        <Person name="Claudio" age="21" />
        <Person name="Pedro" age="32">My Hobbies: Racing!</Person>
        <Person name="Luis" age="44" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this works now?'));
  }
}

export default App;
