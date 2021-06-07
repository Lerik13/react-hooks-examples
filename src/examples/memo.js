import React, {useState, useEffect, useMemo} from 'react';

// hook 'useMemo' to optimize app = use Cash: to prevent delays in complex calculations
// 2) work with Objects = Cash it if necessary!

function complexCompute(num) {
	console.log('complexComputed');
	let i = 0;
	while (i < 1000000000) i++;
	return num * 2;
};

function App() {
	const [number, setNumber] = useState(42);
	const [colored, setColored] = useState(false);

	//const styles = { color: colored ? 'darkred' : 'black' };
	const styles = useMemo(() => ({
		color: colored ? 'darkred' : 'black'
	}), [colored]);
	// we don't need to invoke complex function, if the value of number is not changed
	// use CASH
	const computed = useMemo(() => {
		return complexCompute(number)
	}, [number]);

	useEffect(() => {
		console.log('Styles changed');
	}, [styles]);

	return (
		<div>
			<h1 style={styles}>Computed property: {computed}</h1>
			<button className='btn btn-success' onClick={() => setNumber(prev => prev + 1)}>Add</button>
			<button className='btn btn-danger' onClick={() => setNumber(prev => prev - 1)}>Minus</button>
			<button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Change</button>
		</div>
	);
}

export default App;
