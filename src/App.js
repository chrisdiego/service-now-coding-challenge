import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import Incidents from './Incidents';
import StateTotals from './StateTotals';
import './css/app.css';

const App = () => {
  const [incidents, setIncidents] = useState([]);
  const [incidentTotals, setIncidentTotals] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, toggleLoading] = useState(true);
  
  const fetchAllIncidents = async () => {

    try {
      const response = await fetch('http://localhost:3000/incidents')
      const result = await response.json()

      if(result.length) {
        const states = result.reduce((total, incident) => total.includes(incident.state) || incident.state === undefined ? [...total] : [...total, incident.state], []);
        const countedStates = states.map(state => { return {name: state, total: result.filter(incident => incident.state === state).length} })
        setIncidentTotals(countedStates)

        setIncidents(result);
        toggleLoading(false);
      } else {
        throw new Error("No records found!")
      }
    } catch (e) {
      alert(e);
    }    
  }
  useEffect(() => {
    fetchAllIncidents()
  }, [])

  return (
      <div style={{background: 'whitesmoke'}}className='container-fluid'>
        {filter === '' ?
          <>
            <Heading className='section-heading'>
              At a glance
            </Heading>
            <StateTotals incidentTotals={incidentTotals} loading={loading} setFilter={setFilter} />
            <Heading className='section-heading'>
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
