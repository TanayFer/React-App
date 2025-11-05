import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const buttonStyle = {
        border: '1px solid black', 
        padding: '5px 10px', 
        margin: '0 5px',
        cursor: 'pointer'
    };

    return (
        <div>
            <h1>Counter</h1>
            
            <p style={{ fontSize: '3em', margin: '20px 0' }}>
                {count}
            </p>
            
            <button 
                onClick={decrement}
                aria-label="Decrement count"
                style={buttonStyle}
            >
                Decrement
            </button>
            
            <button 
                onClick={increment}
                aria-label="Increment count"
                style={buttonStyle}
            >
                Increment
            </button>
        </div>
    );
};

export default App;