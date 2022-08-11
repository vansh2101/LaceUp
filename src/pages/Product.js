import React from 'react';
import '../style/Product.css';

//? Components
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Btn from '../components/Btn';

//? data
import shoes from '../static/shoes.json';

//todo: add men, women and kid section label

function Product() {
  const id = window.location.search
  const shoe = shoes[id.replace("?", '')]

  return (
    <>
    <Navbar />

    <div className='container'>
        <div className='left'>
            <Showcase img={shoe.img} />
        </div>

        <div className='right'>
            <h1>{shoe.name}</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget pellentesque nisl. In sit amet fermentum arcu. Proin malesuada metus.</p>

            <h2>${shoe.price}</h2>

            <Btn />
        </div>
    </div>
    </>
  )
}

export default Product