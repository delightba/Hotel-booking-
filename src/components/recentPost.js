import React from 'react'
import { RecentPost } from './props';

function Recent() {
  return (
    <div>
      <RecentPost 
        heading="Getting the most out of your vacation"
        author="Aaron Patterson"
        image="../images/stream.png"
      />
      <RecentPost 
        heading="Choosing the perfect Safaris in Africa"
        author="Sam Phipphen"
        image="../images/grass.png"
      />
      <RecentPost 
        heading="Hiking during the monsoon in Asia"
        author="Tony Hawk"
        image="../images/river.png"
      />
      <RecentPost 
        heading="Must carry items while travelling to Thailand"
        author="Himali Turn"
        image="../images/workSpace.png"
      />
      <RecentPost 
        heading="An extremely funny trip to the Swiss Alps"
        author="Naomi Watts"
        image="../images/nightSky.png"
      />
    </div>
  )
}

export default Recent;
