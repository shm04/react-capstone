import React from 'react';
import PropTypes from 'prop-types';

function League({
  id, name, logo,
}) {

  return (
    <button className="league-section" id={id}>
      <img src={logo.light} className="league-logo" alt="league-logo" />
      <div className="details">
        <h2 className="title">{name}</h2>
      </div>
    </button>
  );
}

League.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default League;
