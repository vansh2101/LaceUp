import React, {useState} from 'react';
import '../style/Product.css';

//? Components
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Btn from '../components/Btn';
import Filter from '../components/Filter';

//? data
import shoes from '../static/shoes.json';


function Product() {
  const id = window.location.search.replace("?", '')
  const shoe = shoes[id]

  const [size, setSize] = useState()
  const [msg, setMsg] = useState()

  const add_to_cart = (id) => {
    const data = JSON.parse(localStorage.getItem('cart'))

    if(!size){
      setMsg('Select a shoe size')
    }
    else if (!data || data.filter((item) => item.id==id && item.size_added==size).length == 0){
      const arr = data? data:[]
      const new_data = {'size_added': size, 'count': 1, ...shoes[id]}
      arr.push(new_data)
      localStorage.setItem('cart', JSON.stringify(arr))
      setMsg('Item Added to cart')
    }
    else{
      const index = data.findIndex(item => item.id == id && item.size_added == size)
      data[index]['count'] += 1
      localStorage.setItem('cart', JSON.stringify(data))
      setMsg('Item Added to cart')
    }

    const ele = document.getElementById('snackbar')
    ele.className = 'visible'
    setTimeout(function(){
      ele.className = ele.className.replace('visible', '')
  }, 2900)
  }

  return (
    <>
    <Navbar />

    <div id='snackbar'>{msg}</div>

    <div className='container'>
        <div className='left'>
            <Showcase img={shoe.img} />
        </div>

        <div className='right'>
            <h1>{shoe.name}</h1>

            <p>{shoe.desc}</p>

            <h3>Size Available:-</h3>
            <div className='flex'>
              {shoe.size.map(item => 
                <Filter key={item} text={`${item} UK`} style={item===size? {opacity: 1} : {}} onClick={() => setSize(item)} filter={false} />
                )}
            </div>

            <h2>${shoe.price}</h2>

            <Btn text='Add to Cart' btn='+' onClick={() => add_to_cart(shoe.id)} />
        </div>
    </div>
    </>
  )
}

export default Product