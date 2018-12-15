import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Event from './components/event';
import data from './events.json';

class App extends Component {
  state = {
    events: []
  }

  /**
   * load events into component as soon as component mounts
   */
  componentDidMount() {
    const sortedEvents = this.sortEvents(data.events)
    this.setState({ events: sortedEvents })
  }

  /**
   * Sort events in array by event_start date and time
   * @param {array} eventsArr 
   */
  sortEvents(eventsArr) {
    return eventsArr.sort((a, b) => {
      return new Date(b.event_start) - new Date(a.event_start)
    })
  }
  
  render() {
    
    const allEvents = this.state.events.map((el, i) => <Event eventData={el} key={i} />)
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
