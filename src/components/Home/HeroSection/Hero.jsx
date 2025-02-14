import React from 'react'
import './Hero.css'

import { Link } from 'react-router-dom';
import SearchBar from '../SerachBar/SearchBar';
function Hero() {
  return (
    <>
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Designing Spaces, Inspiring Lives</h1>
        <p className="hero-subheading">
          We create architectural masterpieces that blend functionality, aesthetics, and sustainability.
        </p>
        <button className="hero-cta">
          
        <Link to="/OurProject">Explore our works</Link>
          
          </button>
          
      </div>
      
  
    </section>
    </>
  )
}

export default Hero