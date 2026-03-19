<div align="center">

# Student Course Registration System

### A full-stack web application for managing student enrollments, course listings, and academic scheduling — built with Node.js, Express, and MongoDB.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## Overview

Managing student course registrations manually is inefficient and error-prone. This project is a **demo full-stack web application** that digitizes the entire course registration workflow — from browsing available courses to enrolling students and tracking their academic schedules.

Built using a **Node.js + Express** backend with **MongoDB** for data persistence, the system follows a clean MVC (Model-View-Controller) architecture and serves a frontend UI directly via Express static files.

---

## Features

- **Course Listing** — Browse all available courses with details
- **Student Management** — Register, view, and manage student records
- **Course Enrollment** — Enroll students in courses and track registrations
- **RESTful API** — Clean route structure for all CRUD operations
- **MongoDB Integration** — Persistent data storage with Mongoose models
- **Frontend UI** — Served statically via Express from the `public/` directory

---

## Project Structure

```
Student_Course_Registration_System_Demo/
│
├── config/             # Database connection configuration
├── models/             # Mongoose schemas (Student, Course, Enrollment)
├── routes/             # Express route handlers
├── public/             # Frontend HTML, CSS, JavaScript files
├── node_modules/       # Dependencies
├── server.js           # Entry point — Express app setup
├── package.json
└── .gitignore
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB (via Mongoose ODM) |
| **Frontend** | HTML, CSS, JavaScript |
| **Architecture** | MVC (Model-View-Controller) |

---

## Application Flow

```
Client (Browser)
      │
      ▼
┌─────────────────────┐
│   Express Server    │  ← server.js — app entry point
│   (server.js)       │
└────────┬────────────┘
         │
    ┌────┴────┐
    │  Routes │  ← /routes — API endpoint definitions
    └────┬────┘
         │
    ┌────┴────────┐
    │ Controllers │  ← Business logic handlers (if separated)
    └────┬────────┘
         │
    ┌────┴────┐
    │  Models │  ← Mongoose schemas for MongoDB
    └────┬────┘
         │
    ┌────┴──────┐
    │  MongoDB  │  ← Persistent data storage
    └───────────┘
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/courses` | Fetch all available courses |
| `POST` | `/api/courses` | Add a new course |
| `GET` | `/api/students` | Fetch all students |
| `POST` | `/api/students` | Register a new student |
| `POST` | `/api/enroll` | Enroll a student in a course |
| `GET` | `/api/enroll/:studentId` | Get all courses for a student |
| `DELETE` | `/api/enroll/:id` | Drop a course registration |

> These are demo endpoints — verify exact routes in the `routes/` folder.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

```bash
# Clone the repository
git clone https://github.com/jasvi05/Student_Course_Registration_System_Demo.git
cd Student_Course_Registration_System_Demo

# Install dependencies
npm install

# Configure your MongoDB connection
# Open config/ and update the connection string with your MongoDB URI
```

### Running the App

```bash
# Start the server
node server.js

# The app will run at:
# http://localhost:3000
```

---

## Configuration

Update the database connection string in the `config/` folder:

```javascript
// config/db.js (example)
mongoose.connect('mongodb://localhost:27017/course_registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

For cloud hosting, replace with your **MongoDB Atlas** URI.

---

## Future Scope

- **Authentication** — JWT-based login for students and admins
- **Admin Dashboard** — Manage courses, view enrollment stats
- **Email Notifications** — Confirmation emails on enrollment
- **Timetable View** — Visual weekly schedule for registered courses
- **Deployment** — Host on Render / Railway with Atlas DB

---

## Author

**Jasvi** — [@jasvi05](https://github.com/jasvi05)

> *This project demonstrates core backend development skills — RESTful API design, MVC architecture, MongoDB integration, and full-stack application structure using Node.js and Express.*

---
