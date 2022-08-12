import React from 'react';
import '../style/Btn.css';

function Btn({bg, color, circlebg, circlec, onClick, text='Buy Now', btn='>'}) {
  return (
    <div className='btn' style={{backgroundColor: bg, color: color}} onClick={onClick}>
      {text}
      <div style={{backgroundColor: circlebg, color: circlec}}>
        {btn}
      </div>
    </div>
  )
}

export default Btn