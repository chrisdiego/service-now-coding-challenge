import React from 'react';
import './css/heading.css';

const Heading = ({ children, className }) => (
	<div className={`row heading ${className}`}>
		<div className='col'>
			<h2>
				{children}
			</h2>
		</div>
	</div>
)

export default Heading;