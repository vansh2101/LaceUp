import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

//? icons
import {GiRunningShoe, GiDuration, GiConverseShoe} from 'react-icons/gi';

//? Components
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Btn from '../components/Btn';

//todo: change the colors of the circles in the products class
//todo: add selling partners and footer

function Home() {
  return (
    <>
      <Navbar />

      <div className='split'>
        <div className='left'>
            <h1>Nike AirMax Pro</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget pellentesque nisl. In sit amet fermentum arcu. Proin malesuada metus. </p>

            <h2>$80.66</h2>

            <Link to='/product'><Btn /></Link>
        </div>

        <div className='center'>
            <Showcase img={'./images/sneakers/sneaker.png'} />
        </div>

        <div className='right'>
          <ul>
            <li>
              <GiRunningShoe className='icon' />
              <div>
                <h3>COMFORTABLE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </li>

            <li>
              <GiDuration className='icon' />
              <div>
                <h3>DURABLE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </li>

            <li>
              <GiConverseShoe className='icon' />
              <div>
                <h3>FLEXIBLE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='products'>
        <div className='bg'></div>

        <div>
          <Showcase img={'/images/sneakers/sneaker2.png'} bg='yellow' scale='0.62' />

          <h3>Nike AirMax Pro</h3>
          <h2>$80.99</h2>
        </div>

        <div>
          <Showcase img={'/images/sneakers/sneaker8.png'} bg='orange' scale='0.62' />

          <h3>Nike AirMax Pro</h3>
          <h2>$80.99</h2>
        </div>

        <div>
          <Showcase img={'/images/sneakers/sneaker5.png'} bg='gray' scale='0.62' />

          <h3>Nike AirMax Pro</h3>
          <h2>$80.99</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
