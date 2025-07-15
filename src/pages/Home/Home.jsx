import React from 'react'
import './Home.css'
import TitleCards from '../../components/TitleCards/TitleCards'
import hero_banner from '../../assets/hero_banner.jpg'
import Navbar from '../../components/Navbar/Navbar'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

function Home() {
  return (
    <div className='home'>
     <Navbar/>
     <div className="hero">
      <img src={hero_banner} className='banner-img' alt="" />
      <div className="hero-caption">
        <img src={hero_title} className='caption-img' alt="" />
        <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an imortal enemy. </p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
        <TitleCards/>
      </div>
     </div>
    </div>
  )
}

export default Home
