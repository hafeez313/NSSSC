import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const home = () => {
  
  return (
    <>
      <Navbar/>
      <Header/>
      <div className='mt-[190px] '>
         <Hero/>
         <Cards />
         <Footer/>   
      </div>
    </>
  )
}

export default home;