import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

const HeroSection = ({lightBg,topLine, lightText,lightTextDesc, headline, description,buttonLabel, img, alt, imgStart}) => {


  return (
    <>
      <div className={lightBg? 'home__hero-section': 'home_hero-section darkBg'}> 

      </div>
    </>
  )
}

export default HeroSection
