import React, { useEffect, useState } from 'react';
import './incidents.css';

const Incident = ({ incident, index }) => {
    const headings = () => {
        const headings = ['Number', 'Priority', 'Short description', 'Category', 'State', 'Created']
    
        return (
            <div className='row incident-headings bg-white'>
                {headings.map(heading => <div className='col'><b>{heading}</b></div>)}
            </div>
        );
    }
	return (
        <>
            {index === 0 ? headings() : null}
            <div className={`row incident ${index % 2 === 0 ? 'bg-white' : ''}`}>
                <div className='col'>
                    {/* onClick should lead to incident details page */}
                    <button className='btn btn-link p-0'>
                        <b>{incident.number}</b>
                    </button>
                </div>
                <div className='col'>
                    {incident.priority}
                </div>
                <div className='col'>
                    {incident.short_description}
                </div>
                <div className='col'>
                    {incident.category}
                </div>
                <div className='col'>
                    {incident.state}
                </div>
                <div className='col'>
                    {incident.sys_created_on}
                </div>
            </div>
        </>
	  );
}

export default Incident;