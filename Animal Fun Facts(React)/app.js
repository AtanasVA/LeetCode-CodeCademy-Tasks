import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';


const title = '';
const images =[]
const showBackground = true;

const background = (
  <img
    className='background' 
    alt='ocean' 
    src='/images/ocean.jpg'
  />
);

const displayFact = (e) =>{
  const animalClicked = e.target.alt;
  const animalInfo = animals[animalClicked]
  const randIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[randIndex];
  document.getElementById('fact').innerHTML = funFact;
};

for(const animal in animals){
  images.push((
    <img 
      key ={animal} 
      className ='animal' 
      alt={animal} 
      src ={animals[animal].image} 
      aria-label={animal} 
      role='button' 
      onClick={displayFact}
    />
  ))
}

const animalFacts = (
<div>
  <h1>
  {title==='' ? 'Click an animal for a fun fact' : title}
  </h1>
  {showBackground && background}
  <p id='fact'>
  </p>
  <div className='animals'>
    {images}
  </div>
 </div> 
);

ReactDOM.render(animalFacts, document.getElementById('root'));
