const pool = require("../config/db");

exports.createTask  = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const [result] = await pool.query(
      "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)",
      [title, description || null, status || "Pending"]
    );

    res.status(201).json({ id: result.insertId, title, description, status: status || "Pending" });
  } catch (error) {
    console.error("Add Task Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    if (rows.length === 0) return res.status(404).json({ message: "Task not found" });
    res.json(rows[0]);
  } catch (error) {
    console.error("Get Task Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks");
    res.json(rows);
  } catch (error) {
    console.error("Get Tasks Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const [result] = await pool.query(
      "UPDATE tasks SET status = ? WHERE id = ?",
      [status, id]
    );

    if (result.affectedRows === 0) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task updated successfully" });
  } catch (error) {
    console.error("Update Task Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);

    if (result.affectedRows === 0) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Delete Task Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};