import React from 'react';
import PropTypes from 'prop-types';

const greetings = (props) => {
  let greet = '';
  const divStyle = {
    display: 'flex',
    border: '1px solid',
    margin: '1%',
    padding: '1%',
  };
  if (props.lang === 'de') {
    greet = 'Hallo';
  }

  if (props.lang === 'fr') {
    greet = 'Bonjour';
  }

  return (
    <div style={divStyle}>
      <h2>
        {greet} {props.children}
      </h2>
    </div>
  );
};

greetings.propTypes = {};

export default greetings;
