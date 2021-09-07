import React from 'react';

const Button = ({ buttonValue, handleClick }) => {
  
    return (
        <button type="button" onClick={() => handleClick(buttonValue)}>
            {buttonValue}
        </button>
    );
  };
export default Button;