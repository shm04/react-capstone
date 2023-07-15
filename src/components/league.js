import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/league.css';
import arrow from '../assets/arrow.png';

function League({
  id, logo, name, slug, abbr,
}) {
  return (
    <Link
      to={`/leagues/${id}?name=${name}&slug=${slug}&abbr=${abbr}&logo=${encodeURIComponent(logo)}`}
      key={id}
      className="league-section"
      data-testid="league-link"
    >
      <img src={logo.light} className="league-logo" alt="league-logo" />
      <img src={arrow} alt="arrow" id="arrow" />
    </Link>
  );
}

League.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  abbr: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    light: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
  }).isRequired,
};

export default League;
