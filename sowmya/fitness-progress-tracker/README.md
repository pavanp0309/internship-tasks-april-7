🏋️ Fitness Progress Tracker
    A stylish, responsive React dashboard app that visually tracks various health and exercise metrics like steps, water intake, sleep, and workouts. Each metric is displayed using a dynamic card component with progress bars and motivational messages.

🚀 Features
    Dynamic Metric Cards – Progress bars that reflect performance visually.
    Goal Evaluation – Messages and status alerts based on whether the user has met the goal.
    Gradient Backgrounds – Each metric card has a unique color theme.
    Categorized Display – Health and Exercise metrics are grouped and displayed separately.
    Goal Completion Alert – Shows a special message if all goals are achieved.
    Encouraging Feedback – Motivational tips based on performance level.

🛠️ Technologies & Concepts Used

    Concept/Tech	                             Description
    React Components	        Modular, reusable pieces like MetricCard, Dashboard, App.
    Props	                    Data passed to components to render dynamic content (goal, achieved, etc).
    Conditional Rendering	    Displays different messages and styles based on logic (if goalMet, etc).
    Array Methods	            .map(), .filter(), .every() for rendering and filtering metrics.
    JSX	                        HTML-like syntax inside JavaScript to define component layout.
    Bootstrap	                Styling framework used for cards, progress bars, and layout utilities.
    Inline & Class Styling	    Combined use of Bootstrap classes and custom inline styles (gradients, font-weight).
    Responsive Layouts	        Uses Flexbox (d-flex, flex-wrap, gap-3) for adaptive designs.
    Custom Gradients	        CSS gradients based on metric type for visual distinction.
    File Structure	            Separates data (data.js), components, and entry points (App, Dashboard).


📁 Folder structure
    fitness-progress-tracker/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── MetricCard.jsx        # Single metric display card
    │   │   └── Dashboard.jsx         # Main dashboard showing all metrics
    │   ├── data/
    │   │   └── data.js               # Hardcoded metric data
    │   ├── App.jsx                   # Main App entry point
    │   └── index.js                  # React DOM render entry
    ├── package.json
    ├── README.md
    └── .gitignore
