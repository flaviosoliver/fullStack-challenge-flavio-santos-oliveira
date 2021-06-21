import React from 'react';
import PropTypes from 'prop-types';
import CollegeContext from '../college';


export default function Provider({ children }) {

  const context = {
  
  };
  
  return (
    <CollegeContext.Provider value={ context }>
      {children}
    </CollegeContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
