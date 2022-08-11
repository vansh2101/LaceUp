import React from 'react';
import '../style/Showcase.css';


function Showcase({img, bg, scale}) {
  return (
    <div className='showcase'>
        <div style={{backgroundColor: bg, scale: scale}}>
            <img src={img} />
        </div>
    </div>
  )
}

export default Showcase