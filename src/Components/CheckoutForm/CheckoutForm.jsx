import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";



const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [contractId, setContractId] = useState("");
  const [paymentError, setPaymentError] = useState(null);
  const [price, setPrice] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
   
    const fetchUsername = async () => {
      try {
        const response = await axios.get("https://promanitasapi.onrender.com/api/v1/user/username"); // Reemplaza esta URL por la ruta correcta para obtener el nombre de usuario del back-end
        setUsername(response.data.username);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsername();
  }, []);


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
        name: name,
      },
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
      return;
    }

    const { id } = paymentMethod;

    try {
      const response = await axios.post("https://promanitasapi.onrender.com/api/v1/payment/", {
        id: id,
        amount: price,
        description: "Pago por servicio de profesional",
        username: username,
        contractId: contractId, 
      });
      setPaymentSuccess(await response.data.message);
      setPaymentError(null);
      setTimeout(() => {
        alert("Contrato creado correctamente")
      }, 2000);
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
              <TextField label="Nombre del titular de la tarjeta" value={name} onChange={(event) => setName(event.target.value)} required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Nombre de usuario" value={username} disabled required fullWidth /> {/* Mostrar el nombre de usuario del usuario logueado */}
            </Grid>
            <Grid item xs={12}>
              <TextField label="Id de Contrato" value={contractId} onChange={(event) => setContractId(event.target.value)} required fullWidth /> {/* Campo para ingresar el Id del contrato */}
            </Grid>
            
            <Grid item xs={12}>
              <TextField label="" type="month" required fullWidth />
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
       
      </Paper>
    </form>
  </Container>
);

};

export default CheckoutForm;