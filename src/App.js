import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Event from './components/event';
import data from './events.json';

class App extends Component {
  render() {
    console.log('log data', data.events)
    const allEvents = data.events.map((el, i) => <Event eventData={el} key={i} />)
    return (
      <div className="App">
        
        <Nav />

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <ul className="list-group">
                {allEvents}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
