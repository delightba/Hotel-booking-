import React from 'react'
import Collapsible from './dropdown'

function Accordion() {
  return (
    <div className='row container'>
        <div className='col-sm-6 col-md-4 col-lg-5'>
            <img className='w-100 rounded' src="../images/skyscraper.png" alt="survey" />
        </div>
        <div className='col-sm-6 col-md-8 col-lg-7'>
            <Collapsible/>
        </div>
    </div>
  )
}

export default Accordion