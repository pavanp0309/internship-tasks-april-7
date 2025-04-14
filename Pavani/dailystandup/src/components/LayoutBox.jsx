import React from 'react';

const LayoutBox = ({ title, children }) => {
  return (
    <div className="layout-box mb-4">
      <h3 className="text-primary">{title}</h3>
      {children}
    </div>
  );
};

export default LayoutBox;
