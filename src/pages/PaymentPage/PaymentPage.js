import { Elements } from '@stripe/react-stripe-js';
import React from 'react'
import CheckoutForm from './CheckoutPayment';
import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey = process.env.STRIPE_KEY || 'pk_test_51QVGPbGSxTXjw7icDGysCKF08GgaaWACcWsdGTkNcsQkHIvZ9MYljlxJIghdeD7CP1zcNuI1xWdN2Ahytfu4qTsC00C9ZZiZNz';
//Publishable Key
const stripePromise = loadStripe(stripePublishableKey);
console.log(stripePromise);

const PaymentPage = (props) => {

    const options = {
        mode: 'payment',
        amount: 200,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            theme: 'flat'
        },
      };
  return (
    <div>
        <Elements stripe={stripePromise} options={options}>
             <CheckoutForm {...props}/>   
        </Elements>
    </div>
  )
}

export default PaymentPage