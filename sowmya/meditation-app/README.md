🧘‍♂️ Meditation Sessions App
A responsive React application showcasing a variety of meditation sessions categorized by type — Focus, Sleep, and Anxiety. Each session card displays its details like duration, lock/premium status, and a short description. Users can start a session or unlock locked ones.

🌟 Features
    Categorized display of meditation sessions
    Locked vs Unlocked session logic
    New session badge
    Premium session tag
    Beautiful UI using Bootstrap and custom inline styles
    Fully responsive layout with Bootstrap grid
    Smart component structure for easy scalability

🧱 Folder structure
    meditation-session-app
    ├── src
    │   ├── components
    │   │   ├── SessionCard.jsx
    │   │   ├── SessionList.jsx
    │   ├── data
    │   │   └── data.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── public
    ├── package.json
    └── README.md


🛠️ Concepts & Technologies Used
🔧 Technologies
    React – Component-based architecture

    JavaScript (ES6+) – Arrow functions, destructuring, ternary ops, etc.

    Bootstrap – Grid system & utility classes for responsive UI

    Vite – Fast build tool for React apps

    JSX – HTML-like syntax in JavaScript

🧠 Key Concepts
Concept	                Description
Props	                    Used to pass session data to components
Conditional Rendering	    Shows buttons/status based on isLocked, isPremium, and isNew flags
Array Methods	            .map() and .filter() to organize and render sessions
Component Reusability	    SessionCard and SessionList are reusable and composable
Responsive Layout	        Bootstrap grid ensures a mobile-friendly design
Styling	                    Combines Bootstrap classes with custom inline styles
