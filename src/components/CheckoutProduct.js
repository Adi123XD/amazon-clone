import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider';
function CheckoutProduct(props) {
    const { id, price, title, rating, image } = props;
    const trunc_title = title.slice(0, 120);
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className='CheckoutProduct'>
            <img className='CheckoutProduct__image' src={image} alt="" />
            <div className="CheckoutProduct__info">
                <p className='CheckoutProduct__title'>{title.lenght < 120 ? { title } : `${trunc_title}...`}</p>
                <p className='CheckoutProduct__price'><small>$</small><strong>{price}</strong></p>
                <div className="CheckoutProduct__rating">
                    {Array(rating)
                        .fill().map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button className='CheckoutProduct__button' onClick={removeFromBasket}>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
