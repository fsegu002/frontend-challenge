import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Event from './components/event';
import Filter from './components/filter';
import data from './events.json';
import PaginationService from './utilities/pagination';
import Pagination from './components/pagination';

class App extends Component {
  state = {
    events: [],
    allEvents: [],
    paginate: '',
    pOptions: {
      offset: 1,
      limit: 15
    }
  }

  /**
   * load events into component as soon as component mounts
   */
  componentDidMount() {
    this.resetState()
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
    this.paginate(filteredEvents, {offset: 1, limit: 10})
    this.setState({allEvents: filteredEvents})
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
    this.paginate(sortedEvents, this.state.pOptions)
  }

  /**
   * Create new Pagination object
   * @param {array} arr - All events to paginate through
   * @param {object} options - Offset and limit options
   */
  paginate = this.paginate.bind(this)
  paginate(arr, options) {
    let newPage = new PaginationService(arr, options)
    this.setState({ 
      paginate: newPage,
      events: newPage.pageResults,
      allEvents: this.sortEvents(data.events)
    }, () => console.log(this.state.paginate))
  }

  /**
   * Go to previous page
   */
  goToPrevPage = this.goToPrevPage.bind(this)
  goToPrevPage() {
    this.state.paginate.goToPrev()
    this.setState({ events: this.state.paginate.pageResults })
    this.scrollPageTop()
  }

  /**
   * Go to next page
   */
  goToNextPage = this.goToNextPage.bind(this)
  goToNextPage() {
    this.state.paginate.goToNext()
    this.setState({ events: this.state.paginate.pageResults })
    this.scrollPageTop()
  }

  /**
   * Scroll to top smoothly. 
   * Animation is not supported in Safari, IE nor Edge
   */
  scrollPageTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
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

              <Pagination page={this.state.paginate} nextPage={this.goToNextPage} prevPage={this.goToPrevPage} />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
