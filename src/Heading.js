import React from 'react';

const Heading = ({ children }) => (
    <div className='row'>
        <div className='col'>
            <h2>
                {children}
            </h2>
        </div>
    </div>
)

export default Heading;