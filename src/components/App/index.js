import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import 'whatwg-fetch';

import Main from '../Main';

class App extends Component {

  render(){
      return (
        <div className="App">
          <header className="App-header">
            <div>
              <h1>TV Series List</h1>

              <Main/>
            </div>
          </header>

        </div>
      );
    }
}

export default App;
