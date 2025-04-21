import React from "react";
import MetricCard from "./MetricCard";

const MetricGroup = ({ title, metrics }) => {
  return (
    <>
      <h4 className="mt-4">{title}</h4>
      <div className="row">
        {metrics.map((metric, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <MetricCard {...metric} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MetricGroup;
