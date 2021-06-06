import React, {useState} from 'react';

import './App.css';

function computeInitialCounter() {
	console.log('Some calculation');
	return Math.trunc(Math.random() * 20);
}

function App() {
	//const [counter, setCounter] = useState(0);
	// for optimization: use anonymous function (callback) for preventing invocation func every time when state is changing
	const [counter, setCounter] = useState(() => computeInitialCounter());
	
	const [state, setState] =useState({
		title: 'Counter',
		date: Date.now()
	});

	function increment() {
		// Bug: does not work, as hooks is asynchronous functions
		//setCounter(counter + 1);
		//setCounter(counter + 1);
		setCounter((prevCounter) => {
			return prevCounter + 1
		});
		setCounter(prev => prev + 1 );
	}

	function decrement() {
		setCounter(counter-1);
	}
	//Pattern to change object, without loosing other fields
	function updateTitle() {
		setState( prev => {
			return {
				...prev,
				title: 'New Title'
			}
		})
	}

	return (
		<div>
			<h1>Counter {counter}</h1>
			<button className='btn btn-success' onClick={increment}>Add</button>
			<button className='btn btn-danger' onClick={decrement}>Minus</button>
			<button className='btn btn-default' onClick={updateTitle}>Change Titie</button>

			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
}

export default App;
