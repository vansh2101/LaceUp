import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

//? icons
import {GiRunningShoe, GiDuration, GiConverseShoe} from 'react-icons/gi';

//? Components
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Btn from '../components/Btn';

//? data
import shoes from '../static/shoes.json';


function Home() {
  return (
    <>
      <Navbar />

      <div className='split'>
        <div className='left'>
            <h1>{shoes[0].name}</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget pellentesque nisl. In sit amet fermentum arcu. Proin malesuada metus. </p>

            <h2>${shoes[0].price}</h2>

            <Link to={{pathname:'/product', search: shoes[0].id}}><Btn /></Link>
        </div>

        <div className='center'>
            <Showcase img={shoes[0].img} />
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
          <Showcase img={shoes[1].img} bg='yellow' scale='0.62' />

          <h3>{shoes[1].name}</h3>
          <h2>${shoes[1].price}</h2>
        </div>

        <div>
          <Showcase img={shoes[2].img} bg='orange' scale='0.62' />

          <h3>{shoes[2].name}</h3>
          <h2>${shoes[2].price}</h2>
        </div>

        <div>
          <Showcase img={shoes[3].img} bg='brown' scale='0.62' />

          <h3>{shoes[3].name}</h3>
          <h2>${shoes[3].price}</h2>
        </div>
      </div>

      <div className='partners'>
        <h1>Our Partners</h1>

        <div>
          <img src='/images/nike.png' />
          <img src='/images/adidas.png' />
          <img src='/images/puma.png' />
          <img src='/images/vans.png' />
          <img src='/images/reebok.png' />
        </div>
      </div>
    </>
  );
}

export default Home;
