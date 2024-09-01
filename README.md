Dish Delight
Dish Delight is a full-stack restaurant application designed to provide users with an easy way to browse menus, make table reservations, and track orders in real-time. This project was built using React.js for the frontend and Node.js with Express for the backend, with MongoDB for managing user registration.
Features
User Registration: Secure user Register and login.
Menu Browsing: Users can view a variety of dishes with descriptions and pricing.
Table Reservation: Users can reserve a table online before visiting the restaurant.
Responsive Design: The application is fully responsive and works seamlessly on all devices.
Installation
To get started with Dish Delight, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/katiyarnavya/dish-delight.git
cd dish-delight
Install Dependencies: For the backend (Node.js):

bash
Copy code
cd backend
npm install
For the frontend (React.js):

bash
Copy code
cd frontend
npm install
Set Up Environment Variables: Create a .env file in the root of the backend directory and add the following:

The application will be available at http://localhost:3000.
Usage
Register an account and log in.
Browse the menu and select dishes.
Make a reservation for a table.
Challenges and Solutions
State Management: Used React’s Context API and useReducer for efficient global state management.
Responsive Design: Employed CSS Grid, Flexbox, and media queries for a mobile-first design.
Routing and Navigation: Utilized React Router to manage smooth navigation across pages.
Technologies Used
Frontend: React.js, CSS (Grid, Flexbox), React Router
Backend: Node.js, Express.js, MongoDB
