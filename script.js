function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let taskList = document.getElementById("taskList");

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;

  span.onclick = function () {
    span.classList.toggle("completed");
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
}
