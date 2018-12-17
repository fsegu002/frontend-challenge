import React from 'react'
import './styles.css'

function Pagination({page, nextPage, prevPage}) {
    let goToNext = () => {
        nextPage()
    }
    let goToPrev = () => {
        prevPage()
    }
    return (
        <nav id="paginationNav" >
            <ul className="pagination">
                <div className="prevButton">
                    { (!page.prevPage) ? <span></span> : <button className="btn btn-link" onClick={goToPrev} >Previous</button>}
                </div>
                
                <div className="pageCounter">
                    Page {page.currentPage} of {page.numberOfPages}
                </div>

                <div className="nextButton">
                    { (!page.nextPage) ? <span></span> : <button className="btn btn-link" onClick={goToNext} >Next</button>}
                </div>
            </ul>
        </nav>
    )
}

export default Pagination
