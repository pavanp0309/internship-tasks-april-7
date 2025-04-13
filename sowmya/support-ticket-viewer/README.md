🎫 Support Ticket Viewer
    A sleek and functional React application to visualize and manage customer support tickets. Tickets are categorized based on status (Open, In Progress, Closed), with key info like customer type, priority, escalation, and follow-up buttons. Designed for helpdesk dashboards or support teams.

🛠️ Features
    Displays support tickets grouped by status
    Shows customer type (Premium / Free)
    Intelligent tag for High Priority or Escalated cases
    Compact ticket summary view with full details
    Dynamic "Follow Up" button for open issues
    Responsive layout using Bootstrap Grid

🧠 Concepts & Technologies Used
⚙️ Tech Stack
Technology	                    Purpose
React	                    Component-based UI
JSX	                        UI rendering syntax
Bootstrap	                Layout and responsiveness
CSS/JS      	            Custom styles and logic

🔍 Key Concepts
Concept	                                Description
Componentization	        App, TicketBoard, and TicketCard split for reusability
Props	                    Data passed down to components (ticket info to TicketCard)
Conditional Rendering	    Badges (Premium, Escalated), Buttons shown based on logic
Array Methods	            .map(), .reduce(), .filter() used for rendering and grouping
Status-based Grouping	    Tickets grouped using reduce() by their status
Dynamic Styling	            Background colors based on ticket status
Initials Avatar	            Auto-generated initials when no profile picture provided
Responsive Design	        Bootstrap grid makes layout adapt on all screen sizes

📁 Folder Structure
    support-ticket-viewer
    ├── public/
    │   └── index.html
    ├── src
    │   ├── components
    │   │   ├── TicketBoard.jsx
    │   │   └── TicketCard.jsx
    │   ├── data
    │   │   └── data.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── README.md
    └── .gitignore