/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import League from '../components/league';

describe('League component', () => {
  const leagueProps = {
    id: '1',
    logo: {
      light: 'light-logo-url',
      dark: 'dark-logo-url',
    },
    name: 'League Name',
    slug: 'league-slug',
    abbr: 'L',
  };

  test('renders league component with correct props', () => {
    render(
      <MemoryRouter>
        <League {...leagueProps} />
      </MemoryRouter>,
    );
    const leagueLogo = screen.getByAltText('league-logo');
    expect(leagueLogo).toBeInTheDocument();
  });

  test('renders league component with required props', () => {
    render(
      <MemoryRouter>
        <League {...leagueProps} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByAltText('league-logo')).toBeInTheDocument();
  });
});
