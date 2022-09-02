import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Click on an animal for a fun fact!';

const background = <img 
className= 'background' 
alt = 'ocean' 
src = '/images/ocean.jpg' />;

let images = [];

for(const animal in animals){
  images.push(
  <img 
    key= {animal}
    className= 'animal'
    alt = {animal}
    src = {animals[animal].image}
    aria-label = {animal}
    role = 'button'
    onClick = {displayFact}
  />
  )
}

function displayFact(e) {
  let animalInfo = animals[e.target.alt];
  let optionIndex = Math.floor(Math.random() *  animalInfo.facts.length);

  let funFact = animalInfo.facts[optionIndex];
  document.getElementById("fact").innerHTML = funFact;
}

const animalFacts = (
<div>
  <h1>
      {title == "" ? "Main title" : title}
  </h1>
  {background}
  <p id = 'fact'></p>
  <div className = 'animals'>
      {images}
  </div>
</div>
)


ReactDOM.render(animalFacts,document.getElementById('root'));
