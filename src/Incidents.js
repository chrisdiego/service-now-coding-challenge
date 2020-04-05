import React from 'react';
import Incident from './Incident';
import Loading from './Loading';
import './css/incidents.css';

const Incidents = ({ incidents, loading, filter }) => {

	const filteredIncidents = filter === '' ? incidents : incidents.filter(incident => incident.state === filter);

	return (
		loading ? <Loading /> : <div className='incident-container'>{filteredIncidents.map((incident, i) => <Incident index={i} incident={incident} />)}</div>
	  );
}

export default Incidents;
