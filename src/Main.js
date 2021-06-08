import React from 'react';
import {useAlert} from './alert/AlertContext';

export default function Main() {
	const {toggle} = useAlert();
	return (
		<div>
			<h1>Sample with Context</h1>
			<button onClick={toggle} className='btn btn-success'>Show alert</button>
		</div>
	)
}