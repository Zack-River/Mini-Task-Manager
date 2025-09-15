const express = require("express");
const taskRoutes = require("./routes/task.routes");
const limiter = require("./middlewares/rateLimiter");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const app = express();
const public = path.join(__dirname, "public")

// Security Middlewares
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}));
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(public));

// Routes
app.use("/tasks", taskRoutes);

module.exports = app;
