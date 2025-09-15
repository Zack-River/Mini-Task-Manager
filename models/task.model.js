const db = require("../config/db");

exports.createTask = (title, description, status, callback) => {
  const sql = "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)";
  db.query(sql, [title, description, status], callback);
};

exports.getTaskById = (id, callback) => {
  const sql = "SELECT * FROM tasks WHERE id = ?";
  db.query(sql, [id], callback);
};

exports.updateTask = (id, title, description, status, callback) => {
  const sql = "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?";
  db.query(sql, [title, description, status, id], callback);
};

exports.deleteTask = (id, callback) => {
  const sql = "DELETE FROM tasks WHERE id = ?";
  db.query(sql, [id], callback);
};
