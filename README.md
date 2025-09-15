# Mini Task Manager

A simple full-stack **Task Manager** application built with **Node.js, Express, MySQL, and Vanilla JS**.  
This project allows users to create, view, update, and delete tasks with a modern UI.

---

## Features
- Add new tasks with a title and description
- Update task status (`Pending`, `In Progress`, `Done`)
- Delete tasks
- Modern responsive UI with task cards
- Secure backend (rate limiting + SQL injection prevention)
- MySQL database integration

---

## Tech Stack
- **Backend:** Node.js, Express.js, MySQL2
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Database:** MySQL
- **Security:** express-validator, express-rate-limit, parameterized queries

---

## Project Structure
```
Startup_Mini_Task_Manager/
│── app.js
│── server.js
│── package.json
│── .env
│── config/
│   └── db.js
│── controllers/
│   └── task.controller.js
│── routes/
│   └── task.routes.js
│── validators/
│   └── task.validator.js
│── middlewares/
│   └── validate.js
│── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

## Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Create a `.env` file in the root:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_manager
```

### 3. Setup MySQL database
Login to MySQL and run:
```sql
CREATE DATABASE task_manager;
USE task_manager;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('Pending','In Progress','Done') DEFAULT 'Pending'
);
```

### 4. Run the server
```bash
npm run dev
```
or
```bash
node server.js
```

Server will run on: **http://localhost:3000**

---

## UI Preview
- Add tasks using the form
- View tasks in beautiful cards
- Update status or delete tasks with buttons

---

## API Endpoints

| Method | Endpoint     | Description        |
|--------|-------------|--------------------|
| GET    | /tasks       | Get all tasks      |
| GET    | /tasks/:id   | Get task by ID     |
| POST   | /tasks       | Create new task    |
| PUT    | /tasks/:id   | Update task status |
| DELETE | /tasks/:id   | Delete task        |

---

## Author
Developed by **Zack River (Abdallah Wageeh)**