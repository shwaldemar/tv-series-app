import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

import Series from '../../containers/Series';


class App extends React.Component {




  render(){
      return (
        <div className="App">
          <header className="App-header">
            <h1>TV Series List</h1>


            <Series/>
          </header>
        </div>
      );
    }
}

export default App;
