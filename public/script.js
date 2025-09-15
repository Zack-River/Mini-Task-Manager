async function fetchTasks() {
  try {
    const res = await fetch("/tasks");
    const tasks = await res.json();

    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task) => {
      const card = document.createElement("div");
      card.className = "task-card";

      card.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description || "No description provided."}</p>
        <span class="status ${task.status.replace(" ", "-")}">${task.status}</span>
        <div class="actions">
          <button class="done-btn">Done</button>
          <button class="progress-btn">In Progress</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;

      card.querySelector(".done-btn").addEventListener("click", () => updateTask(task.id, "Done"));
      card.querySelector(".progress-btn").addEventListener("click", () => updateTask(task.id, "In Progress"));
      card.querySelector(".delete-btn").addEventListener("click", () => deleteTask(task.id));

      taskList.appendChild(card);
    });
  } catch (err) {
    console.error("Fetch Tasks Error:", err);
  }
}

async function addTask(e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  try {
    await fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    document.getElementById("task-form").reset();
    fetchTasks();
  } catch (err) {
    console.error("Add Task Error:", err);
  }
}

async function updateTask(id, status) {
  try {
    await fetch(`/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchTasks();
  } catch (err) {
    console.error("Update Task Error:", err);
  }
}

async function deleteTask(id) {
  try {
    await fetch(`/tasks/${id}`, { method: "DELETE" });
    fetchTasks();
  } catch (err) {
    console.error("Delete Task Error:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchTasks();
  document.getElementById("task-form").addEventListener("submit", addTask);
});