import React from 'react';
import Incident from './Incident';
import Loading from './Loading';
import './incidents.css';

const Incidents = ({ incidents, loading, filter }) => {

	const filteredIncidents = filter === '' ? incidents : incidents.filter(incident => incident.state === filter);

	return (
		loading ? <Loading /> : filteredIncidents.map((incident, i) => <Incident index={i} incident={incident} />)
	  );
}

export default Incidents;
