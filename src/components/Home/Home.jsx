import React, { useState } from 'react'
import './Home.css'

import { Link } from 'react-router-dom';
import SearchBar from './SerachBar/SearchBar';
import Architects from './TopArchitects/Architects';
import Hero from './HeroSection/Hero';
import SearchResult from './Search Result/SearchResult';
function Home() {
  const[searchDatas,setSearchData]=useState([]);
  const[click,setClicked]=useState(false);
  const handleOnSearch=(searchData)=>{
        setSearchData(searchData);
        console.log(searchData);
        
  }
  const checkClicked=(clicked)=>{
      setClicked(clicked);
  }
  return (
  <>
  <div className="HomeSection">
  <Hero/>
  <SearchBar onSearch={handleOnSearch} onclick={checkClicked}/>
  <SearchResult Data={searchDatas} click={click}/>
  <Architects/>
  </div>
  </>
  )
}

export default Home