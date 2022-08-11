import React from 'react';
import '../style/Btn.css';

function Btn({bg, color, circlebg, circlec, text='Buy Now'}) {
  return (
    <div className='btn' style={{backgroundColor: bg, color: color}}>
      {text}
      <div style={{backgroundColor: circlebg, color: circlec}}>
        {'>'}
      </div>
    </div>
  )
}

export default Btn