import React from 'react';
import {useAlert} from './alert/AlertContext';

export default function Main() {
	const {show} = useAlert();
	return (
		<div>
			<h1>Sample with Context</h1>
			<button onClick={() => show('This text is from Main.js')} className='btn btn-success'>Show alert</button>
		</div>
	)
}