import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
	const [type, setType] = useState('users');
	const [data, setData] = useState([]);
	const [pos,setPos] = useState({
		x: 0, y: 0
	});
		
	/*// Render every time when changing state
	useEffect(() => {
		console.log('Render');
	}); */
	// 
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
		.then(response => response.json())
		.then(json => setData(json))

		return () => {
			console.log('Clean type');
		}
	}, [type]);

	const mouseMoveHandler = event => {
		setPos({
			x: event.clientX,
			y: event.clientY
		});
	}
	// invoking when Component is ready to work -- ONLY 1 Time
	useEffect(() => {
		console.log('ComponentDidMount');

		window.addEventListener('mousemove', mouseMoveHandler);
		// Good practice = to remove all EventListeners - Callback trick
		return () => {
			window.removeEventListener('mousemove', mouseMoveHandler);
		}
	}, []);


	return (
		<div>
			<h1>Resource: {type}</h1>
			<button onClick={() => setType('users')}>Users</button>
			<button onClick={() => setType('todos')}>Todos</button>
			<button onClick={() => setType('posts')}>Posts</button>

			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			<pre>{JSON.stringify(pos, null, 2)}</pre>
		</div>
	);
}

export default App;
