import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react"; 
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";
import { getAllContracts } from "../../Redux/Actions/contractAction"
import { getAllUsers } from "../../Redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [username, ] = useState("");
  const [contractId, setContractId] = useState("");
  const [paymentError, setPaymentError] = useState(null);
  const [payment, setPayment] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // useEffect(() => {
   
  //   const fetchUsername = async () => {
  //     try {
  //       const response = await axios.get("https://promanitasapi.onrender.com/api/v1/user/username"); // Reemplaza esta URL por la ruta correcta para obtener el nombre de usuario del back-end
  //       setUsername(response.data.username);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUsername();
  // }, []);

const {user} = useAuth0()
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllContracts())
  dispatch(getAllUsers());
}, [dispatch])

const allContracts = useSelector((state) => state.contracts.contracts);
const usersDb = useSelector((state) => state.user.allUsers);

//FILTRO EL USUARIO QUE COINCIDA CON EL MAIL QUE ESTA EN SESION
const filteredUser = usersDb.filter((elem) => elem.email === user.email);
console.log(filteredUser)

//COMPARO EL USUARIO CON EL USERID DEL CONTRATO PARA OBTENER LA INFO DE ESE CONTRATO
const filterInfo = allContracts.filter(inf => inf.UserId === filteredUser[0].id)
console.log(filterInfo)

const lastContractId = filterInfo.length > 0 ? filterInfo[filterInfo.length - 1].id : null;
const lastContractPayment = lastContractId ? filterInfo.find(inf => inf.id === lastContractId).payment : null;  
 
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
        amount: lastContractPayment,
        description: "Pago por servicio de profesional",
        username: username,
        contractId: contractId, 
      });
      setPaymentSuccess(await response.data.message);
      setPaymentError(null);
      setTimeout(() => {
        alert("El Pago se realizó con éxito")
        window.location.replace("/home");
      }, 2000);
    } catch (error) {
      setPaymentSuccess(null);
      setPaymentError(await error.response.data.error);
    }
  };
console.log("prob3",payment);
  return (
    <Container maxWidth="sm">
      <form onSubmit={(event) => handleSubmit(event)}>
        <Paper style={{ padding: "16px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Nombre del titular de la tarjeta" value={name} onChange={(event) => setName(event.target.value)} required fullWidth />
            </Grid>
            {filteredUser[0] && filteredUser[0].email ? (
          <div>
            <Grid item xs={12}>
              <TextField
                label="Nombre de Usuario"
                name="username"
                defaultValue={filteredUser[0].username} // Mostrar el nombre de usuario en el campo de texto
                readOnly
                required
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </div>
        ) : null}
            <Grid item xs={12}>
  <TextField
    label="Id de Contrato"
    defaultValue={lastContractId} // Establecer el valor por defecto como lastContractId
    onChange={(event) => setContractId(event.target.value)}
    required
    fullWidth
  />
</Grid>

            
            <Grid item xs={12}>
              <TextField label="" type="month" required fullWidth />
            </Grid>
  
          
          <Grid item xs={12}>
            <CardElement />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label={lastContractPayment}
              type="number"
              defaultValue={lastContractPayment}
              onChange={(event) => setPayment(event.target.value)}
              fullWidth
              readOnly
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
//