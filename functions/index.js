/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express');
const functions = require('firebase-functions');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Npz5hSCNfmE9swAvgs3AxQegx8Q0DT31lnbOLA3B36Cs8YeZlNttKII8cGmdMNmWd5trDuQw0bDV0ovhaYDF9HV002z4Zjz0J');

//API

//API config
const app = express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());


// API - routes
app.get('/',(req,res)=>{
    res.status(200).send('Hello World')
});
app.get('/adi',(req,res)=>{
    res.send("Hi i know yuor name is Adarsh but people call you ADI")
})

app.post('/payments/create/',async (req,res)=>{
    const total = req.query.total;
    console.log("Payments request recieved for amount ", total);
    const paymentIntent =await stripe.paymentIntents.create({
        amount : total,
        currency : 'usd'
    })
    res.status(201).send({
        clientSecret : paymentIntent.client_secret
    })
})

// Listen command
exports.api = functions.https.onRequest(app);
// example endpoint
// http://127.0.0.1:5001/clone-9295c/us-central1/api/

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
