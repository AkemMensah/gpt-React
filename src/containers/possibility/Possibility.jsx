import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt5__possibility section__padding' id='possibility'>
      <div className="gpt5__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt5__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The Possibilities Are Beyoung Your Imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
      
    </div>
  );
}

export default Possibility;
