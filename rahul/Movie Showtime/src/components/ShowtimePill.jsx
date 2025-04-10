import React from 'react';
import './ShowtimePill.css';

const ShowtimePill = ({ time }) => {
  // Logic to determine color based on time
  const getColorClass = (time) => {
    const [hour, minutePart] = time.split(':');
    const hourInt = parseInt(hour, 10);
    const period = minutePart.split(' ')[1]; // AM or PM

    // Convert to 24-hour format
    const hour24 = period === 'PM' && hourInt !== 12 ? hourInt + 12 : hourInt;

    if (hour24 < 12) return 'morning';
    if (hour24 < 18) return 'afternoon';
    return 'evening';
  };

  return (
    <button className={`showtime-pill ${getColorClass(time)}`} disabled={false}>
      {time}
    </button>
  );
};

export default ShowtimePill;