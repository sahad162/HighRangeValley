import React from 'react'
import Footer from '../components/Footer'
import Connect from '../components/LandingPage/Connect'
import Header from '../components/Header'
import Suppliers from '../components/LandingPage/Suppliers'
import Hero from '../components/LandingPage/Hero'
import Why from '../components/LandingPage/Why'
import Gettoknow from '../components/LandingPage/Gettoknow'
import Testimonial from '../components/LandingPage/Testimonial'
import Products from '../components/LandingPage/Products'
import SeoContent from '../components/LandingPage/SeoContent'
function LandingPage() {
  return (
    <>
    < Hero/>
    < Why/>
    < Gettoknow/>
    <Products/>
    < Suppliers/>
    <Testimonial/>
    <Connect/>
    < SeoContent/>
    </>
  )
}

export default LandingPage
