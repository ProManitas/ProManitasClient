import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

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

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;