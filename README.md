
# 🍕 Pizza Delivery App

A full-stack Pizza Delivery Application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This application provides a seamless ordering experience for users and an efficient dashboard for admins to manage orders.

## 🚀 Features

### 👥 User Features
- User authentication & registration
- Browse pizza menu with real-time price & toppings
- Add pizzas to cart and checkout
- Track order status (Preparing → On the way → Delivered)
- Secure payment integration (Stripe/placeholder)

### 🛠️ Admin Features
- Admin login portal
- View all orders in real-time
- Update order status
- Manage users and pizzas
- Dashboard with order analytics

## 🧰 Tech Stack

| Technology     | Description                     |
|----------------|---------------------------------|
| **Frontend**   | React.js, TailwindCSS           |
| **Backend**    | Node.js, Express.js             |
| **Database**   | MongoDB                         |
| **Authentication** | JWT, bcrypt                  |
| **Payments**   | Stripe (optional integration)   |
| **State Management** | Redux (if used)           |
| **Deployment** | Netlify (Frontend), Render/Heroku (Backend) |

## 📁 Folder Structure

```
Pizza-Delivery-App/
├── backend/         # Express server & MongoDB config
│   └── models/      # MongoDB models
│   └── routes/      # API routes
│   └── controllers/ # Logic for APIs
├── frontend/        # React frontend app
│   └── src/
│       └── components/
│       └── pages/
│       └── redux/   # (if used)
└── README.md
```

## 🖥️ Screenshots

> Add screenshots of your app UI here for both user and admin views.

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Indrajit128/Pizza-Delivery-App.git
cd Pizza-Delivery-App
```

### 2. Setup Backend

```bash
cd backend
npm install
# Add .env file with Mongo URI and JWT_SECRET
npm run server
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

## 🌐 Environment Variables

Create a `.env` file in `/backend`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## ✅ To-Do / Improvements

- [ ] Add real payment gateway integration (e.g., Stripe)
- [ ] Email confirmation on order placement
- [ ] Live order tracking via sockets
- [ ] Delivery boy dashboard

## 👨‍💻 Author

**Indrajit Kshirsagar**  
📧 [Connect on LinkedIn](https://www.linkedin.com/in/indrajit-kshirsagar)

## 📄 License

This project is licensed under the MIT License.

