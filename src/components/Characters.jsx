import React, { Fragment } from 'react'

export default function Characters({ character = [] }) {
  return (
    <Fragment>
      <div className="row">
        {
          character.map((item, index) => (
            <div key={index} className="col">
              <div className="card" style={{minWidth: "200px"}}  >
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title" > {item.name} </h5>
                  <hr/>
                  <p> Especie: {item.species}</p>
                  <p> Location: {item.location.name}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}
