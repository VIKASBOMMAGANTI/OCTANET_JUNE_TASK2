function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value;
    newTask.addEventListener("click", toggleTask);
    
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", deleteTask);

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = "";
  }
}

function toggleTask() {
  this.classList.toggle("completed");
}

function deleteTask() {
  this.parentNode.remove();
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});
