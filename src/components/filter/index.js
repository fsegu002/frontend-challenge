import React from 'react'
import './style.css'

function Filter({callFilter, resetFilter, numberOfResults, limit}) {
    let typingTimer;

    let handleChange = (e) => {
        const term = e.target.value
        if(term.length >= 3){
            typingTimer = setTimeout(() => callFilter(term), 2000)
        } else if(!term.length) {
            resetFilter()
        }
    }

    let resetTimer = () => {
        clearTimeout(typingTimer)
    }

    return (
        <div className="filterControl">
            <div>
                <input className="form-control" 
                        id="filterInput"
                        type="text" 
                        placeholder="Filter by event's name"
                        onKeyDown={resetTimer}
                        onKeyUp={handleChange}></input>
                <button type="button" className="resetBtn" onClick={resetFilter}>
                    <div onClick={resetFilter}>&times;</div>
                </button>
            </div>            
            <div className="resultsCounter">{limit} of {numberOfResults} results</div>
        </div>
    )
}

export default Filter
