import React from 'react'
import Banner from './Banner'
import Slide from './Slide'
import Banner2 from './Banner2'
import Banner3 from './Banner3'
import { useNavigate } from 'react-router-dom'
import Slide2 from './slide2'
import Pop from './pop'
import Carasoul from './carasoul'


const Maincomp = () => {
  return (
    <div className='home_section' style={{overflowX:"hidden"}}>
        <div className='banner_part'>
            <Banner/>
        </div>
        <div className='slide_part'>
          <Slide title={"Steal Deal"}/>
        </div>
        <div className='banner_part2'>
          <Pop/>
        </div>
        <div className='slide_part2'>
          <Slide2 title={"Newly Added"}/>
        </div>
        <div className='carasoul'>
          <Carasoul/>
        </div>
        <div className='banner_part3'>
          <Banner3/>
        </div>

    </div>
  )
} 

export default Maincomp