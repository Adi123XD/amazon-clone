import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{basket,user},dispatch] = useStateValue();
  const navigate = useNavigate();
  const handlePayment=(e)=>{
    if (!user)
    {
      navigate('/login')
    }
    else{
      navigate('/payment')
    }
    
  }
  return (
    <div className='subtotal'>
        <p>Subtotal ({basket?.length} items): 
        <strong>${getBasketTotal(basket)}</strong></p>
        <small className='subtotal__gift'>
            <input type="checkbox" />
            This order contains a gift
        </small>
      <button className='subtotal__button' onClick={handlePayment}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
