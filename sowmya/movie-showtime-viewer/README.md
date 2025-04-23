🎞️ Movie Showtime Viewer
    A visually appealing, responsive React app that displays a list of movies currently playing in various theaters. Users can view movie details, showtimes, and availability (locked, free, premiere). Each showtime is color-coded based on the time of day for easy viewing.

📦 Features
    Displays movies with key metadata like rating, genre, language, and theater
    Showtimes color-coded by time of day
    Locked vs unlocked movies
    Premiere-only badge
    Free show identification
    Responsive Bootstrap layout
    Stylish gradient background

🛠️ Tech Stack & Concepts Used
🧱 Technologies
    React – for building reusable UI components

    JavaScript (ES6+) – arrow functions, array methods, etc.

    Bootstrap – responsive grid, buttons, badges

    CSS (custom) – beautiful background gradient

    JSX – to write UI in JS

🧠 Key Concepts
Concept	                                             Description
Component-Based Architecture	        App, MovieCard, and data modularly structured
Props	                                Passed movie data into the MovieCard component
Conditional Rendering	                Dynamically display badges and buttons
Array Mapping	                        Used .map() to render showtimes and movie list
Styling	                                Mixed Bootstrap classes with inline and external CSS
Reusable Function	                    getShowtimeColor() maps showtime to color (morning, afternoon, evening)


🧪 Project Structure
    ├── src
    │   ├── components
    │   │   └── MovieCard.jsx
    │   ├── data
    │   │   └── data.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── public
    ├── package.json
    └── README.md
