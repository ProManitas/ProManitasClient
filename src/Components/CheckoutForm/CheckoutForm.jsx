import React, { useState } from "react";
import { CardElement, useStripe, useElements,  } from "@stripe/react-stripe-js";
import axios from "axios";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Grid,  Paper } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
const {REACT_APP_STRIPE_PUBLIC } = process.env;

const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLIC)

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [paymentError, setPaymentError] = useState(null);
  const [price, setPrice] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    const stripe = await stripePromise
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
      const response = await axios.post("/payment", {
        id: id,
        amount: price,
        description: "Pago por servicio de profesional",
        username : name,
        
      });
      setPaymentSuccess(await response.data.message);
      setPaymentError(null);
    } catch (error) {
      setPaymentSuccess(null);
      setPaymentError(await error.response.data.error);
    }
  };
  return (
    <Container maxWidth="sm">
    <form onSubmit={(event) => handleSubmit(event)}>
      <Paper style={{ padding: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre del titular de la tarjeta"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <CardElement />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label=""
              type="month"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Precio de Anticipo de Contrato"
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              disabled={!stripe}
              variant="contained"
              color="primary"
              fullWidth
            >
              Pagar
            </Button>
          </Grid>
          {paymentError && (
            <Grid item xs={12}>
              <div>{paymentError}</div>
            </Grid>
          )}
          {paymentSuccess && (
            <Grid item xs={12}>
              <div>
                {paymentSuccess} No olvides que una vez hecho el trabajo debes calificar el aviso para que Promanitas sepa que estuvo todo bien!
              </div>
            </Grid>
          )}
        </Grid>
        {/* <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleGoBack} // para el botón de volver
              >
                Volver
              </Button>
              
            
          </Grid> */}
      </Paper>
    </form>
  </Container>
);

};

export default CheckoutForm;