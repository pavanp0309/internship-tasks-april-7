import React from 'react';

const MovieCard = ({ movie }) => {
  const {title,showtimes,theater,rating,language,genre,isFull,isFreeShow,isPremiere} = movie;

  const now = new Date("2025-04-14T11:00:00"); // Dummy time

  const getTimeCategory = (time) => {
    const [t, meridian] = time.split(' ');
    let [hours] = t.split(':').map(Number);
    if (meridian === 'PM' && hours !== 12) hours += 12;
    if (hours < 12) return "Morning";
    if (hours < 17) return "Afternoon";
    return "Evening";
  };

  const isNowPlaying = (time) => {
    const [t, meridian] = time.split(' ');
    let [hours, minutes] = t.split(':').map(Number);
    if (meridian === 'PM' && hours !== 12) hours += 12;
    const showTime = new Date(now);
    showTime.setHours(hours, minutes, 0);
    const diff = (showTime - now) / 60000;
    return diff >= 0 && diff <= 60;
  };

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 16,
      margin: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      maxWidth: "300px",
      width: "100%"
    }}>
    
      <h2>{title} {isPremiere && <span style={{ color: 'purple' }}>[Premiere Only]</span>}</h2>
      <p>{language} | {genre}</p>
      <p>Theater: {theater}</p>
      <p>⭐ {rating ?? "N/A"}</p>
      {isFreeShow && <p style={{ color: 'green' }}>Free Show 🎁</p>}

      <div style={{ marginTop: 10 }}>
        {showtimes?.length > 0 ? (
          showtimes.map((time, idx) => {
            const category = getTimeCategory(time);
            let bg = "#f87171"; // Evening default
            if (category === "Morning") bg = "#fde047"; // Yellow
            else if (category === "Afternoon") bg = "#60a5fa"; // Blue

            return (
              <button
                key={idx}
                disabled={isFull}
                style={{margin: 4,padding: "6px 12px",borderRadius: 20,backgroundColor: isFull ? "#ccc" : bg,color: "#000",cursor: isFull ? "not-allowed" : "pointer",border: "none"}}
               >
                {isFull ? "House Full 🔒" : time}
                {!isFull && isNowPlaying(time) && <span style={{marginLeft: 6,fontSize: 11,backgroundColor: 'green',color: '#fff', padding: '2px 6px', borderRadius: 10}}>Now</span>}
              </button>
            );
          })
        ) : (
          <p style={{ color: "red" }}>No shows available today</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
