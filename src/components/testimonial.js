import React from 'react'
import Fade from './slick'

export default function Testimonial() {
  return (
    <div className='container'>
        <div className='col-sm-6 col-md-6 col-lg-7'>
            <h1 className='text-primary-emphasis fw-bolder'>Testimonials</h1>
            <p className='fs-5 text-body-tertiary'>Here are what some of our amazing customers are saying about our hotels & tours. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Fade/>
    </div>
    
  )
}
