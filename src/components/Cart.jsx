import { useContext } from 'react';
import {CartContext} from "../context/Cart"


const Cart = () => {
  const cart=useContext(CartContext);
  const total=cart.items.reduce((a,b)=>a+b.price,0);
  return (
    <div className='cart'>
      <h1>Cart</h1>
      {cart &&
       cart.items.map((items)=>(
          <li>{items.name} - &{items.price}</li>
        ))
      }
      <h2>total bill:{total} $</h2>
    </div>
  )
}

export default Cart;
