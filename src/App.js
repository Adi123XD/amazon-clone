import './App.css';
import React,{useEffect} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
//This loads up stripe with my api key
const promise=loadStripe('pk_test_51Npz5hSCNfmE9swAqjX0Sz2zjE4Nrj8mgwv1EnZcBgTs2OQoE7nfiNIxijiW9v2UYScYpp5dpFGR1jtJJXJ5crVi00ESn9lUxX');
function App() {
  const [{},dispatch] =useStateValue();
  useEffect(()=>{
    // will only run once when the app component loads for example  when user logs in or logs out
    auth.onAuthStateChanged((authUser)=>{
      console.log("The user is >>>",authUser)
      if(authUser)
      {
        // this means the user has logged in or was already logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        })

      }
      else{
        // if authUser is null it means that the user just logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })

  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<><Header /><Home /></>} />
          <Route exact path ='/login' element={<><Login/></>}/>
          <Route exact path='/checkout' element={<><Header /><Checkout/></>} />
          <Route exact path ='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
          <Route exact path='/orders' element={<><h1>your order has been successfully placed</h1></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
