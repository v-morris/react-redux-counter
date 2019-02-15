import React from 'react';

const Counter = ({ count, clicks, onDecrement, onIncrement, onInputTextChange, inputText, onInputTextComplete }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span> {count} </span>
        <button onClick={onIncrement}>+</button>
        <br />
        <span><h4>Times the increment/decrement buttons have been clicked: {clicks} </h4></span>
        <input type="number" onChange={event => onInputTextChange(event.target.value)} />
        <button onClick={() => onInputTextComplete(inputText)}>Change Count Number</button>
      </div>
    </div>

  );
}
export default Counter;