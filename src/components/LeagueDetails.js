import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../styles/leagueDetails.css';

function LeagueDetails() {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const abbr = searchParams.get('abbr');

  return (
    <section className="main-description">
      <h2>League Details</h2>
      <h3>
        League name:
        {name}
      </h3>
      <p>
        League id:
        {id}
      </p>
      <p>
        League abbreviation:
        {abbr}
      </p>
    </section>
  );
}

export default LeagueDetails;
