import React from 'react'
import "./Section1.css"
import cars1 from "./cars1.png"
import car2 from "./car.png"
import hand from "./Group.png"
import driving from "./driving.png"
const Section1 = () => {
  return (
    <div>
      <div className='s1'>
        <div>
          <img className='cars1' src={cars1} alt="image" />
        </div>

        <div className='s2'>
          <div className='s3'>
            <img className='i1' src={car2} alt="" />
            <img className='i2' src={hand} alt="" />
          </div>
          <span>Return Fare, Not Fair!</span>
          <p >
            Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your one-way travel.
          </p>
        </div>

        <div className='s4'>
          <img src={driving} alt="" />
          <span>Now available routes are!</span>
          <p>Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly</p>
        </div>
      </div>
      <div className='s5'>
        
          <p>Why choose AC Bus or AC Train for your One-way Journey?</p>
          <p>Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.

          </p>
          <p>Read More....</p>
         
      </div>
    </div>

  )
}

export default Section1