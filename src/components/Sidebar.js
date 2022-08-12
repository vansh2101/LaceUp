import React, {useState} from 'react';
import '../style/Sidebar.css'

//? Components
import Filter from './Filter';


function Sidebar({func}) {

  return (
    <div className='sidebar'>
      <h3>Size</h3>

      <div className='flex'>
        <Filter text='5 UK' onClick={() => func('size', 5)} />
        <Filter text='6 UK' onClick={() => func('size', 6)} />
        <Filter text='7 UK' onClick={() => func('size', 7)} />
        <Filter text='8 UK' onClick={() => func('size', 8)} />
        <Filter text='9 UK' onClick={() => func('size', 9)} />
        <Filter text='10 UK' onClick={() => func('size', 10)} />
      </div>

      <br/>

      <h3>Color</h3>

      <div className='flex'>
        <Filter text='Red' onClick={() => func('color', 'red')} />
        <Filter text='Blue' onClick={() => func('color', 'blue')} />
        <Filter text='Green' onClick={() => func('color', 'green')} />
        <Filter text='White' onClick={() => func('color', 'white')} />
        <Filter text='Gray' onClick={() => func('color', 'gray')} />
        <Filter text='Yellow' onClick={() => func('color', 'yellow')} />
        <Filter text='Pink' onClick={() => func('color', 'pink')} />
      </div>

      <br />

      <h3>Brand</h3>

      <div className='flex'>
        <Filter text='Nike' onClick={() => func('brand', 'nike')} />
        <Filter text='Puma' onClick={() => func('brand', 'puma')} />
        <Filter text='Adidas' onClick={() => func('brand', 'adidas')} />
        <Filter text='Vans' onClick={() => func('brand', 'vans')} />
        <Filter text='Reebok' onClick={() => func('brand', 'reebok')} />
      </div>
    </div>
  )
}

export default Sidebar