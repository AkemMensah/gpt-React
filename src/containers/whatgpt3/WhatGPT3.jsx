import React from 'react';
import './whatgpt3.css';
import ai from '../../assets/ai.png';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whatgpt3'>
      <div className="gpt3__whatgpt3-feature">
        < Feature title="What is GPt3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        <img src={ai} alt="ai" height={150}/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>
          The Possibilities Are Beyound Your Imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestiae aliquid. Blanditiis cupiditate."/>
      </div>
    </div>
  )
}
export default WhatGPT3;
