import React, {useState, useEffect} from 'react';
import '../style/Shop.css';
import { Link, useParams } from 'react-router-dom';

//? Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Btn from '../components/Btn';
import Card from '../components/Card';

//? data
import shoes from '../static/shoes.json';

function Shop() {
  let {slug} = useParams()

  const [items, setItems] = useState([])
  const [size, setSize] = useState({5: false, 6: false, 7: false, 8: false, 9: false, 10: false})
  const [color, setColor] = useState({'red': false, 'blue': false, 'white': false, 'gray': false, 'green': false, 'yellow': false, 'brown': false})
  const [brand, setBrand] = useState({'nike': false, 'puma': false, 'adidas': false, 'vans': false, 'reebok': false})

  const update = (filter, val) => {
    if (filter == 'size'){
      const data = size
      data[val] = !size[val]
      setSize(data)
    }
    else if (filter == 'brand'){
      const data = brand
      data[val] = !brand[val]
      setBrand(data)
    }
    else if (filter == 'color'){
      const data = color
      data[val] = !color[val]
      setColor(data)
    }
    
    new_data()
  }

  const new_data = () => {
    var data = []
    var s = []
    var c = []
    var b = []

    for (const item in size) {
      if(size[item]){
        s.push(item)
      }
    }

    for (const item in color) {
      if(color[item]){
        c.push(item)
      }
    }

    for (const item in brand) {
      if(brand[item]){
        b.push(item)
      }
    }
    
    const check = (item) => {
      return s.includes(item.toString())
    }

    for(let i=0; i<shoes.length; i++){
      if (shoes[i].category == slug){
        if(s.length ==0 && b.length==0 && c.length == 0){
          data.push(shoes[i])
        }
        else if(b.includes(shoes[i].brand) || c.includes(shoes[i].color) || shoes[i].size.some(check)){
          data.push(shoes[i])
        }
      }
    }

    setItems(data)
  }

  useEffect(()=> {
    new_data()
  }, [slug])

  return (
    <>
    <Navbar />

    <Sidebar func={update} />

    <main>
        <div className='banner'>
            <div>
                <h1>Nike AirMax Pro</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget pellentesque nisl. In sit amet fermentum arcu. Proin malesuada metus.</p>

                <br />

                <Link to={{pathname: '/product', search: '0'}}><Btn bg={'black'} color='white' circlebg={'#ce9097'} circlec='black' /></Link>
                <br />
            </div>

            <img src='/images/sneakers/sneaker.png' />
        </div>

        <div className='flexbox'>
            {items.map((item) =>
                  <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} size={item.size} />
              )}
        </div>
    </main>
    </>
  )
}

export default Shop