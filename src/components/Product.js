import React, { useEffect, useState } from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider';
function Product(props) {
    const {id,title, price , rating , image} = props;
    const trunc_title=title.slice(0,120);
    const [{basket},dispatch] = useStateValue ();
    // const [basketclick , setBasketClick] = useState(false);
    console.log("this is the basket",basket);
    // useEffect(()=>{
    //     setBasketClick(false)
    // },[])
    const addToBasket=()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item:{id:id,
            title:title,
        price:price,
    rating:rating,
image:image}
        })
    }
    return (
        <div className='product'>
            <div className="product__info">
                <p className='product__title'>{title.lenght<120?{title}:`${trunc_title} ...`}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img  src={image} alt="Apple iPhone 12 Mini, 64GB, Blue - Unlocked (Renewed)"></img>
            <button className='product__button' onClick={addToBasket}>Add to Basket</button>


        </div>
    )
}

export default Product
