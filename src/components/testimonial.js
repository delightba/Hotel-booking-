import React from 'react'
import Fade from './slick'

export default function Testimonial() {
  return (
    <div className='container d-flex row'>
        <div className='col-sm-6 col-md-6 col-lg-6 testimony' style={{zIndex:'1'}}>
            <h1 className='text-primary-emphasis fw-bolder'>Testimonials</h1>
            <p className='fs-5 text-body-tertiary'>Here are what some of our amazing customers are saying about our hotels & tours. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='mb-5 pb-5' style={{zIndex:'0'}}>
          <Fade/>
        </div>
    </div>
    
  )
}
