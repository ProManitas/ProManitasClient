import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
      return;
    }

    const { id } = paymentMethod;

    try {
      const response = await axios.post("YOUR_SERVER_URL/payments", {
        id: id,
        amount: 1, // Aquí debes poner el monto del pago
        description: "Pago por servicio de profesional",
      });
      setPaymentSuccess(response.data.message);
      setPaymentError(null);
    } catch (error) {
      setPaymentSuccess(null);
      setPaymentError(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>{paymentSuccess}</div>}
    </form>
  );
};

export default CheckoutForm;
