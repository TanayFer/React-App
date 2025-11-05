import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();
      setDateTime(`${date} | ${time}`);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p id="clockDisplay">
          Live Clock: 
        </p>
        <p id="clockDisplay">
          {dateTime}
        </p>
      </header>
    </div>
  );
}

export default App;