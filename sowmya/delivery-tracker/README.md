📦 Delivery Order Tracker

    A sleek and responsive React application to track delivery orders with real-time visual status updates. Built using **React** and **Bootstrap**, the app categorizes orders by their delivery status and displays them in color-coded cards for easy monitoring.



🚀 Features

    - Categorizes orders by delivery status: **Delivered**, **Shipped**, **Out for Delivery**
        - Displays:
            - Customer details
            - Items ordered with quantity and cost breakdown
            - Payment status badges (✅ Paid, ❌ Failed, 💰 COD)
            - Delivery status tracker (Placed → Delivered)
            - Delivery ETA and Partner Info
        - Responsive Bootstrap layout with smooth visuals
        - Color-coded cards based on customer


🧠 Concepts & Tech Used

    | Concept / Tech        | Description |
    |-----------------------|-------------|
    | **React**             | Component-based UI structure |
    | **JSX**               | Declarative markup for rendering logic |
    | **Props**             | Data passed between components |
    | **State (minimal)**   | Orders are static in this version, but state management can be added |
    | **Conditional Rendering** | ETA, delivery partner, etc., shown conditionally |
    | **Array methods**     | `.map()`, `.filter()`, `.reduce()` used extensively |
    | **Bootstrap**         | For layout, responsiveness, and styling |
    | **Dynamic Class Names** | Card and badge colors generated dynamically |
    | **Component Reusability** | `OrderCard`, `PaymentBadge`, `StatusTracker` |

---

🧾 Folder Structure
    delivery-order-tracker/ 
    │ ├── public/ 
    │ └── index.html 
    │ ├── src/ 
    │ ├── components/ 
    │ │ ├── OrderCard.jsx 
    │ │ ├── PaymentBadge.jsx 
    │ │ └── StatusTracker.jsx 
    │ │ │ ├── data/ 
    │ │ └── data.js 
    │ │ │ ├── App.jsx 
    │ ├── index.css 
    │ └── main.jsx 
    │ ├── package.json 
    ├── vite.config.js (if using Vite) 
    └── README.md

