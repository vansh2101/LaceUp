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
            <Showcase img={'/images/sneakers/sneaker12.png'} />
        </div>

        <div className='right'>
            <h4>LIMITED EDITION</h4>
            <h1>Puma AirMax Pro</h1>
            <h4 style={{marginTop: '-25px', marginBottom: 25}}>BY PUMA</h4>

            <p>Sometimes fashion just looks fast. These sci-fi-inspired trainers are bold and colourful because their nostalgic, retro design notes optimistically point to better days ahead. Stride into tomorrow with the RS-Fast Trainers’ unprecedented bold branding and highly visible graphics.</p>

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