import React from 'react';
import Button from './button';

const ButtonPanel = ({ handleClick }) => {
    const buttonValues = [
		"AC",
		"/",
		"*",
		"-",
		"7",
		"8",
		"9",
		"+",
		"4",
		"5",
		"6",
		".",
		"1",
		"2",
		"3",
		"0",
		"=",
    ];
  
    return (
        <>
        {buttonValues.map( (buttonValue) => (
          	<Button
		    	handleClick={handleClick}
            	buttonValue={buttonValue}
            	key={buttonValue+5}
          />
        ))}
        </>
    );
  };
  
  export default ButtonPanel;