import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeagues } from '../redux/leagues/leaguesSlice';
import League from './league';
import '../styles/leagues.css';

function Leagues() {
  const leagues = useSelector((state) => state.league.leagues);
  const loading = useSelector((state) => state.league.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section>
      <h1>Leagues information</h1>
      <div className="main-div">
        {leagues.slice(0, 18).map((league, index) => (
          <League
            key={league.id}
            id={league.id}
            name={league.name}
            logo={league.logo}
            abbr={league.abbr}
            slug={league.slug}
            className={index % 2 === 0 ? 'league-section dark' : 'league-section light'}
          />
        ))}
      </div>
    </section>
  );
}

export default Leagues;
