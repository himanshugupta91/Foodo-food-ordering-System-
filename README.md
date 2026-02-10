# Foodo - Food Delivery Application

Foodo is a modern, full-stack food delivery application built with React. It provides a seamless experience for customers to order food and a comprehensive dashboard for restaurant administrators to manage their business.

## 🚀 Features

### 👤 Customer
- **Browse Restaurants**: View all available restaurants and their menus.
- **Search**: Search for specific food items or restaurants.
- **Order Management**: Add items to cart, place orders, and track order status.
- **User Profile**: Manage personal information, saved addresses, and favorites.
- **Authentication**: Secure login and registration.
- **Payments**: Integrated payment flow.

### 🛠 Admin & Restaurant Dashboard
- **Dashboard**: Real-time overview of sales and orders.
- **Menu Management**: Create, update, and delete menu items.
- **Order Management**: View incoming orders and update their status.
- **Ingredient Management**: Manage food ingredients, categories, and stock.
- **Restaurant Details**: Update restaurant information, opening hours, and status.
- **Events**: Create and manage restaurant events.

## 🛠 Tech Stack

- **Frontend**: React.js
- **State Management**: Redux, Redux Thunk
- **Styling**: Tailwind CSS, Material UI (MUI)
- **Routing**: React Router DOM
- **Forms & Validation**: Formik, Yup
- **HTTP Client**: Axios
- **Icons**: MUI Icons, Lucide React

## 📂 Project Structure

```
src/
├── admin/          // Admin dashboard components
├── components/     // Shared UI components (Navbar, Cards, etc.)
├── config/         // App configuration
├── customers/      // Customer-facing pages and components
├── routers/        // Application and Customer/Admin routing configuration
├── state/          // Redux store, actions, and reducers
├── superAdmin/     // Super Admin specific components
├── theme/          // Dark/Light theme configuration
└── ...
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm

### Installation

1. Clone the repository.
2. Navigate to the frontend directory:
   ```bash
   cd frontend-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000).

## 📄 Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
