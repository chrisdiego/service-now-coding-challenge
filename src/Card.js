import React from 'react';
import './css/card.css'

const Card = ({ heading, onClick, children, className }) => {
	return (
		<div className={`card-container ${className}`} onClick={onClick}>
			<h2>{heading}</h2>
			<div className='card-body'>
				{children}
			</div>
		</div>
	);  
}

export default Card;