import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../components/about';

describe('About Component', () => {
  it('renders the About page correctly', () => {
    render(<About />);

    const pageTitle = screen.getByText(/About Page/i);
    expect(pageTitle).toBeInTheDocument();

    const aboutText = screen.getByText(
      /This is a football soccer application that provides information about soccer leagues all over the world./i,
    );
    expect(aboutText).toBeInTheDocument();

    const aboutParagraph = screen.getByTestId('about-paragraph');
    expect(aboutParagraph).toHaveClass('about-p');
  });
});
