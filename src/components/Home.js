import React from 'react'
import './Home.css'
import Product from './Product'
function Home(props) {
    
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="https://allesoverfilm.nl/media/uploads/amazon_prime_winkel_banner.jpg" alt="" />
                <div className="home__row">
                    <Product id={"1"} title={"Apple iPhone 12 Mini, 64GB, Blue - Unlocked (Renewed)"}
                    price ={288}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/61M5w4HMIJL._AC_UY218_.jpg"}/>
                    <Product id={"2"} title={"Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver"}
                    price={1055.04} rating={5}
                    image={"https://m.media-amazon.com/images/I/71S4sIPFvBL._AC_UY218_.jpg"}
                    />
                    {/* <Product setBasketItems={props.setBasketItems}  basketItems={props.basketItems}/> */}
                    {/* product  */}
                </div>
                <div className="home__row">
                <Product id={"3"} title={"Phillips Hair Straightner Brush with CareEnhance Technology"}  image={"https://m.media-amazon.com/images/I/51F4Fsq42SL._AC_UL600_FMwebp_QL65_.jpg"}
                price ={37.89} rating={4}  />
                <Product  id ={"4"} title ={"Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)"} image={"https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UL400_.jpg"} rating={5} price ={69.99}
                 />
                <Product id={"5"} title ={"KRIDDO 3-in-1 Kids Tricycles for 2-3 Year Old, 12 Inch Front Wheel Trike and Toddler Balance Bike Bicycle for Boys Girls 2 Years to 4 Years, Removable Pedals for Push and Ride Fun, Black"} image={"	https://m.media-amazon.com/images/I/81BlZcWVfxL._AC_SX679_.jpg"}price={100} rating ={5} />
                </div>
                <div className="home__row">
                <Product id={"6"} title={"VIZIO 24-inch D-Series FHD LED Smart TV w/Bluetooth Headphone Capable, AMD FreeSync & Alexa Compatibility, D24fM-K01, 2023 Model"} image={"	https://m.media-amazon.com/images/I/716yJwuB3jL._AC_SX296_SY426_FMwebp_QL65_.jpg"} rating={5}
                price ={150} />
                </div>
            </div>

        </div>
    )
}

export default Home
