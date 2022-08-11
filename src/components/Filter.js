import React, {useState} from 'react';
import '../style/Filter.css';

function Filter({text, onClick, style}) {
  const [count, setCount] = useState(false)

  const click = () => {
    onClick()
    setCount(!count)
  }

  return (
    <div className='filter' onClick={click} style={count? {opacity: 1} : style? style : {}}>{text}</div>
  )
}

export default Filter