const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const { createTaskValidator, updateTaskValidator } = require("../validators/task.validator");
const validate = require("../middlewares/validate");

router.post("/", createTaskValidator, validate, taskController.createTask);

router.put("/:id", updateTaskValidator, validate, taskController.updateTask);

router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTaskById);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
