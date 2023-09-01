import axios from 'axios';
import React, { useState, useEffect } from 'react';

function GreetingsComponent() {
  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/greetings')
      .then(response => {
        // Access the 'text' field from the API response
        setGreetings(response.data.text);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <p>{greetings}</p>
    </div>
  );
}

export default GreetingsComponent;
