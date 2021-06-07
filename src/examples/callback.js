import React, {useState, useCallback} from 'react';
import ItemsLists from './ItemsList';

// hook useCallback for Optimization, as hook useMemo = cash function, not result of function
// so function will not change during new render, (ex: changing 'colored')
function App() {
	const [colored, setColored] = useState(false);
	const [count, setCount] = useState(1);

	const styles = { 
		color: colored ? 'darkred' : 'black' 
	};

	const generateItemsFromAPI = useCallback((indexNumber) => {
		return new Array(count).fill('').map((_, i) => `Item ${i + indexNumber}`);
	}, [count]);

	return (
		<div>
			<h1 style={styles}>Quantity of elements: {count}</h1>
			<button className='btn btn-success' onClick={() => setCount(prev => prev + 1)}>Add</button>
			<button className='btn btn-danger' onClick={() => setCount(prev => prev - 1)}>Minus</button>
			<button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Change</button>

			<ItemsLists getItems={generateItemsFromAPI} />
		</div>
	);
}

export default App;
