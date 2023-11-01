import React from 'react';

const Tab = ({ label, selected, onClick }) => {
  return (
    <div
      className={`tab ${selected ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Tab;
