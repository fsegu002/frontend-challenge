import React from 'react'
import './style.css'

export default function Alert({close}) {
  return (
    <div className="container alertBlock">
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2 alertContainer" >  
                <div className="alert alert-warning" role="alert">
                A simple warning alert with  Give it a click if you like.
                </div>
                <button type="button" onClick={close} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
  )
}
