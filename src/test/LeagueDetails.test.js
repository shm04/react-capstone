import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LeagueDetails from '../components/LeagueDetails';
import '@testing-library/jest-dom/extend-expect';

describe('LeagueDetails', () => {
  it('should render league details correctly', () => {
    const route = '/leagues/123?name=Premier%20League&abbr=EPL';
    const { getByText } = render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/leagues/:id" element={<LeagueDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    const leagueName = getByText(/League name:/i);
    const leagueId = getByText(/League id:/i);
    const leagueAbbr = getByText(/League abbreviation:/i);

    expect(leagueName).toHaveTextContent('League name:Premier League');
    expect(leagueId).toHaveTextContent('League id:123');
    expect(leagueAbbr).toHaveTextContent('League abbreviation:EPL');
  });
});
