import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import Incidents from './Incidents';
import StateTotals from './StateTotals';
import './App.css';

const App = () => {
  const [incidents, setIncidents] = useState([]);
  const [incidentTotals, setIncidentTotals] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, toggleLoading] = useState(true);
  
  const fetchAllIncidents = async () => {

    //TODO: catch error if fetch call fails
    const response = await fetch('http://localhost:3000/incidents')
    //TODO: make sure response is populated with at least 1 record
    const result = await response.json()

    const states = result.reduce((total, incident) => total.includes(incident.state) || incident.state === undefined ? [...total] : [...total, incident.state], []);
    const countedStates = states.map(state => { return {name: state, total: result.filter(incident => incident.state === state).length} })
    setIncidentTotals(countedStates)

    setIncidents(result);
    toggleLoading(false);
    
  }
  useEffect(() => {
    fetchAllIncidents()
  }, [])

  return (
      <div style={{background: 'whitesmoke'}}className='container-fluid'>
        {filter === '' ?
          <>
            <Heading>
              At a glance
            </Heading>
            <StateTotals incidentTotals={incidentTotals} loading={loading} setFilter={setFilter} />
            <Heading>
              All Incidents
            </Heading>
          </> : 
          <div className='row filtered-heading'>
            <button className='btn btn-primary' onClick={() => setFilter('')}>Back</button>
            <h2>{filter}</h2>
            <div>{incidentTotals.reduce((count, state) => state.name === filter ? state.total : count, 0)}</div>
          </div>
        } 
        <Incidents incidents={incidents} loading={loading} filter={filter} />
      </div>
    
  );
}

export default App;
