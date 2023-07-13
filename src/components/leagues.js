import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeagues } from '../redux/leagues/leaguesSlice';
import League from './league';

function Leagues() {
  const leagues = useSelector((state) => state.league.leagues);
  const loading = useSelector((state) => state.league.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      {leagues.slice(0, 18).map((league) => (
        <League
          key={league.id}
          id={league.id}
          name={league.name}
          logo={league.logo}
        />
      ))}
    </section>
  );
}

export default Leagues;
