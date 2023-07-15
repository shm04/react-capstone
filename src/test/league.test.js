import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import League from '../components/league';
import '@testing-library/jest-dom/extend-expect';

const mockLeague = {
  id: '1',
  name: 'League 1',
  slug: 'league-1',
  abbr: 'L1',
  logo: {
    light: 'logo-light.png',
    dark: 'logo-dark.png',
  },
};

describe('League component', () => {
  it('should render league logo and arrow', () => {
    const { getByAltText } = render(
      <Router>
        <League
          id={mockLeague.id}
          name={mockLeague.name}
          slug={mockLeague.slug}
          abbr={mockLeague.abbr}
          logo={mockLeague.logo}
        />
      </Router>,
    );

    const leagueLogo = getByAltText('league-logo');
    const arrow = getByAltText('arrow');

    expect(leagueLogo).toBeInTheDocument();
    expect(arrow).toBeInTheDocument();
  });

  it('should render link with correct URL and query parameters', () => {
    const { getByTestId } = render(
      <Router>
        <League
          id={mockLeague.id}
          name={mockLeague.name}
          slug={mockLeague.slug}
          abbr={mockLeague.abbr}
          logo={mockLeague.logo}
        />
      </Router>,
    );

    const leagueLink = getByTestId('league-link');
    const expectedURL = '/leagues/1?name=League 1&slug=league-1&abbr=L1&logo=%5Bobject%20Object%5D';

    expect(leagueLink).toHaveAttribute('href', expectedURL);
  });
});
