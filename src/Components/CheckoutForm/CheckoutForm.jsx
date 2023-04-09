import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [finish, setFinish] = useState("");
  const [paymentError, setPaymentError] = useState(null);
  const [price, setPrice] = useState(0);
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
      billing_details: {
        name: name
      }
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
      return;
    }

    const { id } = paymentMethod;

    try {
      const response = await axios.post("http://localhost:3001/api/v1/payment", {
        id: id,
        amount: price, // Aquí debes poner el monto del pago
        description: "Pago por servicio de profesional",
        username : name,
        terminationDate: finish 
      });
      setPaymentSuccess(await response.data.message);
      setPaymentError(null);
    } catch (error) {
      setPaymentSuccess(null);
      setPaymentError(await error.response.data.error);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label>Nombre del titular de la tarjeta:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label>Finalizacion del contrato:</label>
        <input
          type="date"
          value={finish}
          onChange={(event) => setFinish(event.target.value)}
          required
        />
      </div>
      <CardElement />
      <div>
        <label>Fecha de vencimiento:</label>
        <input type="month" required />
      </div>
      <div>
        <label>Fecha de pago:</label>
        <input type="date" required />
      </div>
      <label>
        Precio:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && (
        <div>
          {paymentSuccess} No olvides que una vez hecho el trabajo debes calificar el aviso para que Promanitas sepa que estuvo todo bien!
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;