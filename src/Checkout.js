import React from 'react'
import './Checkout.css'
import MenuIcon from '@mui/icons-material/Menu';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './components/CheckoutProduct';

function Checkout() {
    const [{basket,user}, dispatch] =useStateValue();
    return (
        <div className='checkout__body'>
            <div className="checkout__navbar">
                <div className="nav__items d-flex aic">
                    <MenuIcon style={{ fontSize: "14px" }} />
                    <span>All</span>
                </div>
                <span className='nav__items'>Today's Deals</span>
                <span className='nav__items'>Customer Service</span>
                <span className='nav__items'>Registry</span>
                <span className='nav__items'>Gift Cards</span>
                <span className='nav__items'>Sell</span>
            </div>
            <div className="checkout d-flex">
                <div className="checkout__left">
                    <div >
                        <img className="checkout__ad" src="https://www.earticleblog.com/wp-content/uploads/2017/08/gp-amazon-sale-banner-29062017.jpg" alt="" />
                    </div>
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className='checkout__title'>Shopping Cart</h2>
                        {basket.length===0 && <div className='checkout__title'> <h3>Your Basket is Empty </h3></div> }
                        {basket.map(item=>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                        )
                        )}
                        {/* Basket Items */}
                        {/* Basket Items */}
                        {/* Basket Items */}
                        {/* Basket Items */}
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal/>

                </div>
            </div>



        </div>
    )
}

export default Checkout
