import React, { Component } from 'react';

import './App.css';
import Search from './Components/search/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1>Google Book Search</h1>
        </header>
        <Search />
      </div>
    );
  }
}


export default App;
