import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObject2} from './DataServices'
export default function Services() {
  return (
    <div>
      <Pricing/>
      <HeroSection {...homeObject2}/>
    </div>
  )
}
