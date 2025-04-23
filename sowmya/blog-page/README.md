🍽️ Delicious Food Blog - React Project

This is a basic React application that displays a list of food blog posts. 
Each post is shown as a styled card with a thumbnail image, title, author, description, tags, and a "Read More" button.


📁 Project Structure
    food-blog/
    │
    ├── public/
    │      
    ├── src/
    │   ├── assets/
    │   │   └── background.jpg       # Background image used in index.css
    │   │   └── global desserts.jpg   
    │   │   └── healthy breakfast.jpg   
    │   │   └── street food.jpg   
    │   │
    │   ├── components/
    │   │   └── BlogList.jsx         # Component that displays blog cards
    │   │
    │   ├── data/
    │   │   └── blogData.js          # Array of blog post data
    │   │
    │   ├── App.jsx                  # Main app file rendering BlogList
    │   ├── main.jsx                 # Entry point using ReactDOM
    │   └── index.css                # Can be empty or used for resets/globals
    │
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js               # Vite configuration
    └── README.md                    # Project documentation


✅ Highlights:
    assets/ for images
    components/ for reusable React components
    data/ to hold blog post content
    App.css includes styling for layout, cards, buttons, background
    Minimal external dependencies (no Tailwind, no Bootstrap used directly)