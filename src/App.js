import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Event from './components/event';
import Filter from './components/filter';
import data from './events.json';
import Pagination from './components/pagination';

class App extends Component {
  state = {
    events: [],
    allEvents: [],
    paginate: null
  }

  /**
   * load events into component as soon as component mounts
   */
  componentDidMount() {
    this.resetState()
    this.paginate(data.events, {offset:1, limit:10})
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

  /**
   * Filter events array by event.name based on searchTerm string
   * @param {string} searchTerm 
   */
  filterEvents = this.filterEvents.bind(this)
  filterEvents(searchTerm) {
    const sortedEvents = this.sortEvents(data.events)
    let filteredEvents = sortedEvents.filter(el => {
      let rgx = new RegExp( searchTerm , 'i')
      let matchString = el.name.match(rgx)
      if(matchString !== null) {
        return el
      }
      return false
    })
    let paginate = new Pagination(filteredEvents, {offset: 1, limit: 10})
    this.setState({
      events: paginate.pageResults,
      allEvents: filteredEvents,
      paginate
    })
    
  }

  /**
   * Clear filter and reset input field
   */
  clearFilter = this.clearFilter.bind(this)
  clearFilter() {
    document.getElementById('filterInput').value = ''
    this.resetState()
  }

  /**
   * Reset events to original data source and sort them
   */
  resetState = this.resetState.bind(this)
  resetState() {
    const sortedEvents = this.sortEvents(data.events)
    let newPage = new Pagination(sortedEvents, {offset: 1, limit: 10})
    this.setState({ 
      events: newPage.pageResults,
      allEvents: sortedEvents,
      paginate: newPage
    })
  }

  paginate = this.paginate.bind(this)
  paginate(arr, options) {
    let newPage = new Pagination(arr, options)
    this.setState({ 
      paginate: newPage,
      events: newPage.pageResults
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
              <Filter callFilter={this.filterEvents} 
                      resetFilter={this.clearFilter}
                      numberOfResults={this.state.allEvents.length}
                      limit={this.state.events.length}/>
            
            
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
