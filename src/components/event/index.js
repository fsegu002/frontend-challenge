import React from 'react'
import './style.css'
import moment from 'moment'

export default function Event(props) {
    const { name, event_start, event_end, status, contact, account } = props.eventData
    const startDay = moment(event_start).format("D")
    const startMonth = moment(event_start).format("MMM")
    const timeStart = moment(event_start).format("HH:mm")
    const timeEnd = moment(event_end).format("HH:mm")
    return (
        <li className="event" >
            <div className="eventDate">
                <div className="dateContainer">
                    <div className="eventDay">{startDay}</div>
                    <div className="eventMonth">{startMonth}</div>
                </div>
            </div>
            <div className="eventInfo">
                <h3>{name}</h3>
                <p>Contact: {contact.full_name}</p>
                <p>Account: {account.name}</p>
                <p>{timeStart} - {timeEnd}</p>
                
                <p>{status}</p>
            </div>
        </li>
    )
}
