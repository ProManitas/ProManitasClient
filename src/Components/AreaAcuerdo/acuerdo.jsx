import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {Button, TextField,Typography} from "@mui/material";

const socket = io('http://localhost:3000');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    socket.emit('chat message', inputValue);
    setInputValue('');
  }

  // function handlePayment() {
  //   // Aquí puedes agregar el código para dirigir al usuario a la plataforma de pagos Stripe
  // }

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h5" style={{ marginBottom: '20px' }}>
        Aquí podran ponerse de acuerdo en presupuesto, horarios y demas detalles privados
      </Typography>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Mensaje"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
        
      </form>

      <Typography variant="h6" style={{ marginBottom: '20px' }}>
       Cuando esten de acuerdo, el contratante puede pagar el valor del contrato en el boton Pagar
      </Typography>
    </div>
  );
}

export default Chat;