import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Button, Link, TextField, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

const socket = io("http://localhost:3000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    socket.emit("chat message", inputValue);
    setInputValue("");
  }

  // function handlePayment() {
  //   // Aquí puedes agregar el código para dirigir al usuario a la plataforma de pagos Stripe
  // }

  return (
    <div style={{ margin: "20px" }}>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        En este espacio podrás acordar con el profesional los detalles de
        contratación.
      </Typography>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center" }}
      >
        <TextField
          label="Mensaje"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          underline="hover"
        >
          <Link href="/construction" style={{ textDecoration: "none" }}>
            Enviar
          </Link>
        </Button>
      </form>

      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        Si ya has acordado iniciar el trabajo con el profesional, por favor
        realiza el pago del valor del contrato ¡No te preocupes! Este valor será
        descontado del costo final que acuerdes con el profesional.
      </Typography>
    </div>
  );
}

export default Chat;
