import React from 'react';
import '../style/Auction.css';

//? components
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Btn from '../components/Btn';
import Filter from '../components/Filter';

function Auction() {
  return (
    <>
    <Navbar />

    <div className='container auction'>
        <div className='left'>
            <Showcase img={'/images/sneakers/sneaker10.png'} />
        </div>

        <div className='right'>
            <h4>LIMITED EDITION</h4>
            <h1>Nike AirMax Pro</h1>
            <h4 style={{marginTop: '-25px', marginBottom: 25}}>BY NIKE</h4>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget pellentesque nisl. In sit amet fermentum arcu. Proin malesuada metus.</p>

            <div className='time'>
                <div className='box'>2</div>
                <span>days&nbsp;</span><span>left</span>
            </div>

            <h3>Size Available:-</h3>
            <div className='flex'>
                <Filter text={'6 UK'} style={{opacity:1}} />
                <Filter text={'7 UK'} style={{opacity:1}} />
                <Filter text={'8 UK'} style={{opacity:1}} />
            </div>

            <h2>$100</h2>

            <Btn />
        </div>
    </div>
    </>
  )
}

export default Auction