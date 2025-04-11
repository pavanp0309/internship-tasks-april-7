import React from "react";
import MetricCard from "./MetricCard";

const CategorySection = ({ title, items }) => (
  <>
    <h2 className="category-title">{title}</h2>
    <div className="metric-list">
      {items.map((metric) => (
        <MetricCard key={metric.type} {...metric} />
      ))}
    </div>
  </>
);

export default CategorySection;
