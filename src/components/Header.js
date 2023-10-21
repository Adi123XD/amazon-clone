import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
        return (
            <div className='header'>
                <div className="header_logo_div">
                    <Link to="/"><img className="header_logo" src='https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png' alt="" amazon_logo /></Link>
                    <span className='header_span'>.in</span>
                </div>

                <div className='header__search'>
                    <input type="text" className='header__searchinput' />
                    <SearchIcon className='header__searchicon'></SearchIcon>
                </div>
                <div className="header__nav">
                    <Link to={!user && '/login'} className='link-dec-none'>
                        <div className="header__option" onClick={handleAuth}>
                            <span className='header__optionLine1'>Hello {user?`${user.email}`:'Guest'}</span>
                            <span className='header__optionLine2'>{user ? "Sign Out" : "Sign In"}</span>
                        </div>
                    </Link>
                    <div className="header__option">
                        <span className='header__optionLine1'>Returns</span>
                        <span className='header__optionLine2'>& Orders</span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLine1'>Your</span>
                        <span className='header__optionLine2'>Prime</span>
                    </div>
                    <Link to='/checkout' className='link-dec-none'>
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className='header__optionLine2 basket__count'>{basket?.length}</span>
                        </div>
                    </Link>
                </div>

            </div>
        )
    }

    export default Header
