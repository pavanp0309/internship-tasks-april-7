import React from "react";

const SummaryView = ({ summary }) => {
  return (
    <>
      <h4 className="mt-5 summary-heading">Last 7-Day Summary</h4>
      <div className="table-responsive">
        <table className="table table-bordered mt-2">
          <thead className="table-light">
            <tr>
              <th>Day</th>
              <th>Steps</th>
              <th>Water (ml)</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((day, idx) => (
              <tr key={idx}>
                <td>{day.day}</td>
                <td>{day.steps}</td>
                <td>{day.water}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SummaryView;
