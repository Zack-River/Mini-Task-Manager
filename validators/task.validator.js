const { body } = require("express-validator");

exports.createTaskValidator = [
  body("title")
    .notEmpty().withMessage("Title is required")
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters long"),

  body("description")
    .optional()
    .isLength({ max: 500 }).withMessage("Description can’t exceed 500 characters"),

  body("status")
    .optional()
    .isIn(["Pending", "In Progress", "Done"]).withMessage("Invalid status"),
];

exports.updateTaskValidator = [
  body("title")
    .optional()
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters long"),

  body("description")
    .optional()
    .isLength({ max: 500 }).withMessage("Description can’t exceed 500 characters"),

  body("status")
    .optional()
    .isIn(["Pending", "In Progress", "Done"]).withMessage("Invalid status"),
];
