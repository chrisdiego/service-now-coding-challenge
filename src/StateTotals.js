import React from 'react';
import Card from './Card';

const StateTotals = ({ incidentTotals, setFilter }) => {

    return (
        <>
            <div className='row section'>
                {incidentTotals.map(state => {
                    return (
                            <div className='col'>
                                <Card className='card-button' heading={state.name} onClick={() => setFilter(state.name)}>
                                    <div style={{fontSize: '36px'}}>
                                        <b>{state.total}</b>
                                    </div>
                                </Card>
                            </div>
                    )
                })}
            </div>
        </>
    );
}

export default StateTotals;