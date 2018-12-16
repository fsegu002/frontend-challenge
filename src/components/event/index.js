import React from 'react'
import './style.css'

export default function Event(props) {
    const { name, event_start, event_end, status, contact, account } = props.eventData
    return (
        <li className="event" >
            <h4>{name}</h4>
            <p>Contact: {contact.full_name}</p>
            <p>Account: {account.name}</p>
            <p>From: {event_start}</p>
            <p>To: {event_end}</p>
            <p>{status}</p>
        </li>
    )
}
