function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    // Crea una nueva lista
    var li = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);
  
    // Agreega una nueva
    taskList.appendChild(li);
  
    // Limpia el "input" para la siguiente tarea
    taskInput.value = "";
  }
  