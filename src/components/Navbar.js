import React from 'react';
import '../style/Navbar.css';
import {Link} from 'react-router-dom';
import {RiShoppingBagFill} from 'react-icons/ri'

//? icons
import {FaSearch} from 'react-icons/fa';

function Navbar() {
  return (
    <>
        <ul className='nav'>
            <li><Link to='/'><img src='/images/logo.png' /></Link></li>
            <li className='links'>
                <div>
                    <Link to='/shop/men'>Men</Link>
                    <Link to='/shop/women'>Women</Link>
                    <Link to='/shop/kids'>Kids</Link>
                    <Link to='/deals'>Deals</Link>
                </div>
            </li>
            <li style={{textAlign: 'right'}}>
              <input type='text' placeholder='Search...' />
              <FaSearch color='black' className='icon' />
            </li>
            <li style={{textAlign: 'right', width: 'fit-content'}}>
              <Link to='/cart'><RiShoppingBagFill color='#8dc53e' className='cart-icon' /></Link>
            </li>
        </ul>
    </>
  )
}

export default Navbar