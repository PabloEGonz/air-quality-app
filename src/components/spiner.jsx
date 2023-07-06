import React from 'react';

function Spiner() {
  return (
    <div className="spinner" role="status">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spiner;
