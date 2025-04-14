import React from 'react';
import MetricCard from './MetricCard';

const MetricGroup = ({ title, children }) => {
  return (
    <>
      <h3 className="mt-4">{title}</h3>
      <div className="row">
        {React.Children.map(children, (child, idx) => (
          <div className="col-md-6 col-lg-4 mb-3" key={idx}>
            {child}
          </div>
        ))}
      </div>
    </>
  );
};

MetricGroup.MetricCard = MetricCard;
export default MetricGroup;
