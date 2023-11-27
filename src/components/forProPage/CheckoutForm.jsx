import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../myHooks/useAxiosSecure";
import useAuth from "../../myHooks/useAuth";
import Swal from "sweetalert2";
import moment from "moment";


const CheckoutForm =  () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const price = 40; 

  useEffect(() => {
     axiosSecure.post('/create-payment-intent', {price, email: user.email} )
     .then(res => {
       setClientSecret(res.data.clientSecret);
    })
   },[axiosSecure, price, user]);


  const handleSubmit = async(e)=> {
    e.preventDefault();
    if(!stripe || !elements){
      return;
    }
    const card = elements.getElement(CardElement);
    if(card == null){
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if(error){
      setError(error.message)
    }else{
      setError('');
      console.log(paymentMethod);
    }
    const {paymentIntent, error: cardError} = await stripe.confirmCardPayment(
      clientSecret,{
        payment_method:{
          card: card,
          billing_details: {
            email: user.email
          }
        }
      }
    )
    if(cardError){
     Swal.fire('Card Error', cardError);
    }else{
      if(paymentIntent.status === 'succeeded'){
        Swal.fire("Payment Successful and Now You are a Pro User");
        setTransactionId(paymentIntent.id);
        const date = new Date();
        const utcDate = moment.utc(date);
  
        const payment = {
          email: user.email,
          price: price,
          date: utcDate,
          transactionId: transactionId
        };
      await axiosSecure.post('/payments', payment);
      // update the role of user into pro-user;
      const res = await axiosSecure.patch(`/users?email=${user.email}`);
      console.log(res.data);
      }
    }
  };
  
  
  return (
   <form onSubmit={handleSubmit}>
     <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
                <button type="submit" disabled={!stripe}>
          Pay
        </button>
        <p className="text-red-600">{error}</p>
      {
       transactionId && <p className="text-green-500">Your transactionId is:{transactionId}</p>
      }

   </form>
  );
};

export default CheckoutForm;