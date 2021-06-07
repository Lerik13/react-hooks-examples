// for useCallback hook example
import React, {useState, useEffect} from 'react';

export default function ItemsLists({ getItems }) {
	const [items, setItems] = useState ([]);

	useEffect(() => {
		const newItems = getItems(40);
		setItems(newItems);
		console.log('render getItems');
	}, [getItems]);

	return (
		<ul>
			{ items.map(i => <li key={i}>{i}</li>) }
		</ul>
	)
}