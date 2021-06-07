import React from 'react';

export default function Main({ toggle }) {
	return (
		<div>
			<h1>Sample with Context</h1>
			<button className='btn btn-success' onClick={toggle}>Show alert</button>
		</div>
	)
}