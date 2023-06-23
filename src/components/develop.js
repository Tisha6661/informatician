import React from 'react';
import construct from '../assets/construct.png';
import './develop.css'

const Develop = (props) => {
  return (
    <div className="container">
      <h1 style={{ fontSize: 40, fontWeight: 'bold' }} >Under Development</h1>
      <div className="image-container" style={{ color: props.theme === 'dark' ? 'black' : '' }}>
        <img src={construct} alt="Under Development" className="development-image" />
      </div>
      <p style={{ fontSize: 20 }}>This page is currently under development. Please check back later.</p>
    </div>
  );
};

export default Develop;
