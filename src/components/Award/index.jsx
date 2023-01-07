import React from 'react';

import awards from './awards'; 

import "./styles.css";

const Award = ({i}) => {
  
  return (
    <div className='d-flex align-items-center my-5 award'>
      <h3 className='d-inline-block me-4 ger'>{awards[i].year}</h3>
      <div className='d-inline-block'>
        {awards[i].award.map(text => {
          return <p key={i++} className="info-award ger">{text}</p>
        })}
      </div>
    </div>
  )
}

export default Award