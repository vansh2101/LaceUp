import React from 'react';
import '../style/Card.css';
import {Link} from 'react-router-dom';

//? Components
import Btn from './Btn';
import Filter from './Filter';

//todo: add men, women, kid label
function Card({id, name, price, img, size}) {
  return (
    <div className='card'>
        <img src={img} />

        <h2>{name}</h2>

        <h3>${price}</h3>

        <div className='flex'>
          {size.map(item => 
          <Filter text={`${item} UK`} style={{opacity:1}} />
          )}
        </div>

        <Link to={{pathname: '/product', search: `${id}`}}><Btn bg={'black'} color='white' circlebg={'#8dc53e'} circlec='black' text='View' /></Link>
    </div>
  )
}

export default Card