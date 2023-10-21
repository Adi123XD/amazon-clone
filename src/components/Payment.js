import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { getBasketTotal } from '../reducer'
import instance from '../axios'
import { db } from '../firebase'
// import axios from 'axios'
function Payment() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientsecret, setClientSecret] = useState('');
    useEffect(() => {
        //generate the client secret that allows us to charge the customer
        // console.log(`/payments/create?total=${Math.round(getBasketTotal(basket)* 100)}`);
        if (getBasketTotal(basket) >= 1) {
            const getClientSecret = async () => {
                const response = await instance({
                    method: 'post',
                    // stripe expects payments in currency subunits
                    url: `/payments/create?total=${Math.round(getBasketTotal(basket)* 100)}`
                    // baseURL :instance.baseURL
                });
                console.log(response);
                setClientSecret(response.data.clientSecret);
                console.log("client secret is ", response.data.clientSecret);
                console.log(clientsecret, "this is my client secret")
            }
            getClientSecret();
        }
    }, [basket])
    const handleChange = (e) => {
        //Listen for changes in the card element 
        // display errors as the customer types the card details
        setDisabled(e.empty);
        setError((e.error) ? e.error.message : "");
    }
    const handleSubmit = async (e) => {
        //all the stripe stuff goes here
        e.preventDefault();
        setProcessing(true);
        console.log(clientsecret);
        const payload = await stripe.confirmCardPayment(clientsecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            },
            metadata: {
                description: "Your transaction description here" // Add a description here
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment Confirmation
            console.log("successful payment");
            console.log(paymentIntent);
            console.log(user.uid);
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket : basket, 
                amount : paymentIntent.amount,
                created : paymentIntent.created           
            })
            setSucceeded(true)
            setProcessing(false)
            setError(null)
            navigate('/orders', { replace: true });
            dispatch({
                type: 'EMPTY_BASKET'
            })

        }).catch((error) => {
            // Handle payment failure here
            console.log("Payment failed")
            alert(error.message)
            setSucceeded(false);
        });
    }
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>Checkout (<Link to='/checkout' className='link'>{basket?.length} items</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Manipal University Jaipur</p>
                        <p>Jaipur ,Rajasthan</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                image={item.image}
                                price={item.price} />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe payment integration */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <h3>Order Total : $ <strong>{getBasketTotal(basket)}</strong></h3>
                                <button disabled={processing || disabled || succeeded ||getBasketTotal(basket)==0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }>
                                    <span> {processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
