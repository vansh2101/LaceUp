import React, {useEffect, useState} from 'react';
import '../style/Cart.css';

//? Components
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';
import Btn from '../components/Btn';


function Cart() {

  const [cart, setCart] = useState([])
  const [change, setChange] = useState(false)
  const [sum, setSum] = useState(0)
  const [items, setItems] = useState(0)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'))

    if(data){setCart(JSON.parse(localStorage.getItem('cart')))}

    var sumc = 0
    var sump = 0
    for(let i in data){
      sumc += data[i]['count']
      sump += (data[i]['price'] * data[i]['count'])
    }

    setSum(sump)
    setItems(sumc)

    setChange(false)
  }, [change])

  const add_count = (id, size) => {
    const data = cart
    const index = data.findIndex((item) => item.id == id && item.size_added == size)
    data[index]['count'] += 1

    localStorage.setItem('cart', JSON.stringify(data))
    setChange(true)
  }

  const subtract_count = (id, size) => {
    const data = cart
    const index = data.findIndex((item) => item.id == id && item.size_added == size)
    data[index]['count'] -= 1

    if (!data[index]['count']){
      data.splice(index, 1)
    }

    localStorage.setItem('cart', JSON.stringify(data))
    setChange(true)
  }

  return (
    <>
    <Navbar />

    <div className='cart-split'>
      <div className='cart-left'>
        <h1>Shopping Cart</h1>
        <hr />

        <table>
          <tr>
            <th style={{width: '55%'}}>Product Details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>

          {cart.map((item) => 
          <tr>
            <td>
              <div className='details'>
                <img src={item.img} />

                <div>
                  <h2>{item.name}</h2>
                  <h4>BY {item.brand.toUpperCase()}</h4>

                  <Filter text={`${item.size_added} UK`} style={{opacity:1}} />
                </div>
              </div>
            </td>

            <td>
              <div className='details'>
                <button onClick={() => {subtract_count(item.id, item.size_added)}}>-</button>
                <input type='text' value={item.count < 10? `0${item.count}`: item.count} readOnly />
                <button onClick={() => {add_count(item.id, item.size_added)}}>+</button>
              </div>
            </td>

            <td>${item.price}</td>

            <td>${(item.price * item.count).toFixed(2)}</td>
          </tr>
          )}
        </table>
      </div>

      <div className='cart-right'>
        <h1>Order Summary</h1>
        <hr />

        <table>
          <tr>
            <th>ITEMS</th>
            <th style={{textAlign: 'right'}}>{items}</th>
          </tr>

          {cart.map(item => 
          <tr>
            <td>{item.name}</td>
            <td style={{textAlign: 'right'}}>${(item.count * item.price).toFixed(2)}</td>
          </tr>
          )}

          <tr>
            <td colSpan={2}><hr /></td>
          </tr>

          <tr>
            <th>TOTAL</th>
            <th style={{textAlign: 'right'}}>{sum.toFixed(2)}</th>
          </tr>

          <tr>
            <td colSpan={2}><hr /></td>
          </tr>
        </table>

        <Btn text='Checkout' bg={'black'} color='white' circlebg={'#8dc53e'} circlec='black' />
      </div>
    </div>
    </>
  )
}

export default Cart