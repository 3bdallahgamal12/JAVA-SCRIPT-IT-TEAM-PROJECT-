var tasks = [];

function addTask() {
  var input = document.getElementById("taskInput");
  var text = input.value.trim();
  if (text == "") { alert("من فضلك اكتب مهمة!"); return; }
  tasks.push({ id: Date.now(), text: text, done: false });
  input.value = "";
  showTasks();
}

function showTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var li = document.createElement("li");
    if (task.done) li.className = "done";
    li.innerHTML =
      '<span>' + task.text + '</span>' +
      '<div>' +
        '<button class="btn-done"   onclick="doneTask(' + task.id + ')">✔</button>' +
        '<button class="btn-edit"   onclick="editTask(' + task.id + ')">✏️</button>' +
        '<button class="btn-delete" onclick="deleteTask(' + task.id + ')">🗑</button>' +
      '</div>';
    list.appendChild(li);
  }
}

function doneTask(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) tasks[i].done = !tasks[i].done;
  }
  showTasks();
}

function editTask(id) {
  var newText = prompt("عدّل نص المهمة:");
  if (newText == null || newText.trim() == "") return;
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) tasks[i].text = newText.trim();
  }
  showTasks();
}

function deleteTask(id) {
  var newTasks = [];
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id != id) newTasks.push(tasks[i]);
  }
  tasks = newTasks;
  showTasks();
}
