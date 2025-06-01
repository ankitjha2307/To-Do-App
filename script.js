function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle("completed");


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

let totalCount = 0;
let doneCount = 0;

function updateCounts() {
  document.getElementById("totalCount").textContent = totalCount;
  document.getElementById("doneCount").textContent = doneCount;
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  span.onclick = () => {
    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      doneCount++;
    } else {
      doneCount--;
    }

    updateCounts();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = () => {
    if (li.classList.contains("completed")) {
      doneCount--;
    }
    totalCount--;
    li.remove();
    updateCounts();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";

  totalCount++;
  updateCounts();
}

