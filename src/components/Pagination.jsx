import React, { Fragment } from 'react'

export default function Pagination({ prev, next, onPrevious, onNext }) {

  const handlePrevious = (e) => {
    onPrevious();
  }
  const handleNext = (e) => {
    onNext();
  }

  return (
    <Fragment>
      <nav className="my-5" >
        <ul className="pagination justify-content-center">
          {
            prev ?
              (<li className="page-item" >
                <button onClick={handlePrevious} className="page-link" >Prev</button>
              </li>) : null
          }
          {
            next ?
              (<li className="page-item" >
                <button onClick={handleNext} className="page-link" >Next</button>
              </li>) : null
          }
        </ul>
      </nav>
    </Fragment>
  )
}
