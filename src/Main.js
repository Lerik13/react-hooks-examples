import React from 'react';
import {useAlertToggle} from './alert/AlertContext';

export default function Main() {
	const toggle = useAlertToggle();
	return (
		<div>
			<h1>Sample with Context</h1>
			<button onClick={toggle} className='btn btn-success'>Show alert</button>
		</div>
	)
}