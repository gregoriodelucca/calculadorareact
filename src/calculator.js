import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Calculadora</h1>
            <input type="text" value={input} readOnly />
            <div>
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', 'C', '=', '/'].map((value) => (
                    <button key={value} onClick={() => value === 'C' ? handleClear() : value === '=' ? handleCalculate() : handleClick(value)}>
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
