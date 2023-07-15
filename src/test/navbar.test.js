import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  it('should highlight active link correctly', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar />
      </MemoryRouter>,
    );

    const activeLink = screen.getByText('Soccer Leagues');
    const inactiveLink = screen.getByText('About');

    expect(activeLink.classList.contains('active')).toBe(false);
    expect(inactiveLink.classList.contains('active')).toBe(false);
  });

  it('should render navbar items correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const logo = screen.getByAltText('logo');
    const backIcon = screen.getByAltText('back-icon');
    const soccerLeaguesLink = screen.getByText('Soccer Leagues');
    const aboutLink = screen.getByText('About');

    expect(logo).toBeInTheDocument();
    expect(backIcon).toBeInTheDocument();
    expect(soccerLeaguesLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
