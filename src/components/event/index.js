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
                <div className={"statusLight " + status}></div>
                <div className="dateContainer">
                    <div className="eventDay">{startDay}</div>
                    <div className="eventMonth">{startMonth}</div>
                </div>
            </div>
            <div className="eventInfo">
                <h3 className="title">{name}</h3>
                <div className="details">
                    <span>For: {contact.full_name}</span><br/>
                    <span>{account.name}</span><br/>
                    <span>{timeStart} - {timeEnd}</span>
                </div>
                
                <div className={"status " + status}>
                    <span>{status}</span>
                </div>
            </div>
        </li>
    )
}
