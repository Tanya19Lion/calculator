// import './App.css';
import React, {useState} from 'react';
import Display from './components/display';
import ButtonPanel from './components/buttonPanel';
import calculate from './operations/calculate';

function App() {
	const initialState = {
		total: null,
		next: null,
		operation: null,
	};

	const [state, setState] = useState(initialState);	
	const { total, next} = state;
	
	const handleClick = (buttonValue) => {
		const calculator = calculate(state, buttonValue);
		setState({ ...calculator });
	};

	const result = next ? next && next.toString() : total && total.toString();

	return (
		<div className="App">
			<div className="calculator">
				<Display result={result} />
				<div className="buttons">
					<ButtonPanel handleClick={handleClick}/>
				</div>
			</div>
		</div>
	);
}

export default App;
