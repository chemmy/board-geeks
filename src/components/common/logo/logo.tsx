import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <div className="logo">
      <FontAwesomeIcon icon={faDice} size="4x" transform={{ rotate: -45 }} color="red" />
    </div>
  );
};

export default Logo;
