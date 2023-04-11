import React, { useState } from "react";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loadStripe } from '@stripe/stripe-js';
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51MtZHVDhQ0hUgSqkOlAWvWZu8YGVgFDuFYiKgSMVWFFjwfqSjk6VcCvacWNISZ6V7gy82PmGCNlhub0YmA9FeVTn00NlgLySlO")

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [price, setPrice] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // Obtén el objeto navigate para navegar
  //const { id } = useParams();

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
        amount: price,
        description: "Pago por servicio de profesional",
      });
      setPaymentSuccess(await response.data.message);
      setPaymentError(null);
    } catch (error) {
      setPaymentSuccess(null);
      setPaymentError(await error.response.data.error);
    }
  };
  const handleGoBack = () => {
    navigate(-1); //
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
        <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleGoBack} // para el botón de volver
              >
                Volver
              </Button>
              
            
          </Grid>
      </Paper>
    </form>
  </Container>
);
};

const WrappedCheckoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default WrappedCheckoutForm;