import React from 'react'

function HeroModule2() {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-6 welcome-img">
            <img
              src={require('../Static/Clinician.jpg')}
              alt="clinician working"
            />
          </div>
          <div className="col-6 welcome-img bg-dark">Block</div>
        </div>
      </div>
    </div>
  )
}

export default HeroModule2
