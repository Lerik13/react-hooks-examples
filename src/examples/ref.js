import React, {useState, useEffect, useRef} from 'react';
// Hook useRef save state during working with component, but it is NOT invoke RENDER
// 2) can get references to DOM elements
// 3) use for Focusing elements

function App() {
	// count how many times the app was rendered
	// -- Infinity loop
	//const [renderCount, setRenderCount] = useState(1);
	const [value, setValue] = useState('initial');
	const renderCount = useRef(1); // object
	const inputRef = useRef(null);
	const prevValue = useRef('');

	useEffect(() => {
		//setRenderCount(prev => prev + 1);
		renderCount.current++;
		//console.log(inputRef.current.value);
	});

	useEffect(() => {
		prevValue.current = value
	}, [value]);

	const focus = () => inputRef.current.focus();

	return (
		<div>
			{/* <h1>Quantity of renders: {renderCount}</h1> */}
			<h1>Quantity of renders: {renderCount.current}</h1>
			<h2>Previous state: {prevValue.current}</h2>
			<input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value} />
			<button className='btn btn-success' onClick={focus}>Focus</button>
		</div>
	);
}

export default App;
