Daily Standup Board

    A simple and visually engaging React app to display daily standup reports of a development team. This project categorizes updates by teams and highlights blockers clearly.



🛠️ Tech Stack

    **React** (Functional components)
    **Bootstrap** (Grid system and utility classes)
    **Custom CSS** (Gradient background, hover effects)
    **JSX** (For component structure)
    **Props** (For component data flow)
    **Array Methods** (`map`, `filter`)
    **Conditional Rendering**
    **CSS-in-JS Styling Approach** (via dynamic classNames)
    **Modular File Structure**

---

📌 Concepts Used
    React Functional Components: Built using useState-free stateless components.

    Props: Passed data from App.jsx to Card and TeamBoard.

    Dynamic Styling: Cards are styled based on presence of blockers.

    Array operations:

        map() to iterate over users and teams
        filter() to group users by team
        Set to extract unique teams

    Bootstrap: Used for layout (grid system and responsiveness).

    CSS Effects: Hover transform and shadows on cards for better UI interaction.


📁 Project Folder Structure
    daily-standup-board/
    │
    ├── public/
    │   └── index.html
    │
    ├── src/
    │   ├── components/
    │   │   ├── Card.jsx
    │   │   └── TeamBoard.jsx
    │   │
    │   ├── data/
    │   │   └── data.js
    │   │
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── node_modules/               # Installed dependencies (auto-generated)
    ├── package.json                # Project metadata and scripts
    ├── package-lock.json           # Dependency lock file
    ├── vite.config.js              # Vite configuration (if using Vite)
    └── README.md                   # Documentation
