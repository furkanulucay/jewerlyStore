# Jewelry Store - Product Showcase Web App

This is a modern and responsive product showcase web application for a **jewelry store**, where users can:
- View a list of jewelry products
- Filter them by **price** and **popularity** via URL parameters
- Interact with product variants through a **color picker**
- Browse items using a **custom carousel with swipe and arrows**
- See **popularity ratings with stars**, including half-star precision

### 🧩 Tech Stack

| Layer      | Tech                                |
|------------|-------------------------------------|
| Frontend   | React, CSS-in-JS                    |
| Backend    | Node.js, Express.js                 |
| API Calls  | Axios                               |
| Testing    | Jest, Supertest                     |
| Styling    | Custom styles                       |
| State      | React Hooks                         |
| Deployment | Vercel (Frontend), Render (Backend) |
| Containerization | Docker, Docker Compose        |
| Other      | Font Awesome, Responsive Design     |

---

## 🚀 Live Demo

🔗 [JewerlyStore](https://jewerly-store-9mdr9yzo3-frknulucay22-gmailcoms-projects.vercel.app/products)  

## 🧪 Try It Yourself

Explore the app and its filtering features with the following examples:

- 🏠 **Product Listing Page**  
  View all available products:  
  [`/products`](https://jewerly-store-9mdr9yzo3-frknulucay22-gmailcoms-projects.vercel.app/products)

- 🎯 **Filtered Example**  
  Products with **price ≥ $700** and **popularity ≥ 4.0**:  
  [`/products?minPrice=700&minPopularity=4.0`](https://jewerly-store-9mdr9yzo3-frknulucay22-gmailcoms-projects.vercel.app/products?minPrice=700&minPopularity=4.0)

## 🛠️ Getting Started (Local Development)

> This project uses `Docker Compose`, but you can also run it without containers if preferred.

## Getting Started (Local)

### 1. Clone the repository
#### with HTTPS
```bash
git clone https://github.com/furkanulucay/jewerlyStore.git
cd jewelry-store
```
#### with SSH
```bash
git clone git@github.com:furkanulucay/jewerlyStore.git
cd jewelry-store
```

### 2. Environment Setup

Create a `.env` file inside the `backend/` folder:

```
GOLD_API_KEY=your_api_key
```

Create another `.env` file inside the `frontend/` folder:

```
REACT_APP_API_URL=http://localhost:3001
```

---

## Running the Project

### Option A: Using Docker Compose (Recommended)

```bash
docker compose up --build
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:3001

### Option B: Running Manually

**Backend**

```bash
cd backend
npm install
npm start
```

**Frontend**

```bash
cd frontend
npm install
npm start
```

---

## Running Tests

**Backend Test Commands**

```bash
cd backend
npm test
```

Test coverage includes:

- API response structure
- Filter behavior
- Price calculation logic

---


## Features

- 🎨 Color picker with visual selection
- ⭐ Popularity score with full & half star rendering
- 💸 Live price calculation using up-to-date gold value
- 🔍 Filters for price & popularity via URL
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🧭 Swipe and arrow-based carousel
- ⚡ Gold price is cached every 30 minutes to reduce API calls

---

## Author

Developed by **Furkan Uluçay** 

---
