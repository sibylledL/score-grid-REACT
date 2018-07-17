import React, { Component } from 'react';
import './App.css';
import Players from './components/Players';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
            <div className="pong">
              <img src="./pong.png" alt="ping"/>
            </div>
            <h1 className="App-title">Ping Pong Score Grid</h1>
            <div className="pong">
              <img src="./ping.png" alt="pong"/>
            </div>
        </header>
        <div className="ping">
          <img src="./ball.png" alt="ball"/>
        </div>

        <Players />

      </div>
    );
  }
}

export default App;
