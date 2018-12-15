import React, { Component } from 'react';
import './style.css'

class Event extends Component {
    render() {
        const { name, event_start, event_end, status, contact, account } = this.props.eventData

        return (
            <li className="event" >
                <h4>{name}</h4>
                <p>Contact: {contact.full_name}</p>
                <p>Account: {account.name}</p>
                <p>From: {event_start}</p>
                <p>To: {event_end}</p>
            </li>
        );
    }
}

export default Event;