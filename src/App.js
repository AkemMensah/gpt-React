import './App.css';

import { Blog, Footer, Possibility, Features, WhatGPT5,Header} from './containers';
import { CTA,Brand,Navbar,} from './components';

import React from 'react'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          < Navbar />
          < Header />
      </div>
      <Brand />
      <WhatGPT5 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
   </div>
  )
}

export default App;

