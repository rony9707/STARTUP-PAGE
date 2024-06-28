function copyVPN() {
  // Print "Hello, World!" to the console
  const textToCopy = 'Your constant text here';

  // Create a text area element to temporarily hold the text
  const textArea = document.createElement('textarea');

  // Set the constant text as the value of the text area
  textArea.value = textToCopy;

  // Append the text area to the document
  document.body.appendChild(textArea);

  // Select the text in the text area
  textArea.select();

  // Execute the copy command
  document.execCommand('copy');

  // Remove the text area from the document
  document.body.removeChild(textArea);

  // Optionally, you can provide some feedback
  console.log('Copied to clipboard: ' + textToCopy);
}


function copyRDCPassword() {
  // Print "Hello, World!" to the console
  const textToCopy = 'Your constant text here2132323';

  // Create a text area element to temporarily hold the text
  const textArea = document.createElement('textarea');

  // Set the constant text as the value of the text area
  textArea.value = textToCopy;

  // Append the text area to the document
  document.body.appendChild(textArea);

  // Select the text in the text area
  textArea.select();

  // Execute the copy command
  document.execCommand('copy');

  // Remove the text area from the document
  document.body.removeChild(textArea);

  // Optionally, you can provide some feedback
  console.log('Copied to clipboard: ' + textToCopy);
}




// Function to add a task with animation class
// Function to add a task with animation class
function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Generate a unique ID for the task
    const taskId = Date.now().toString();

    // Save the task text in local storage with the unique ID
    localStorage.setItem(`task_${taskId}`, taskText);

    // Create a new task item with animation class
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    taskItem.classList.add("task-enter");

    // Create a remove button for the new task
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", () => {
      removeTask(taskId, taskItem);
    });

    taskItem.appendChild(removeButton);

    // Add the new task item to the task list
    const taskList = document.getElementById("task-list");
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";

    // Delay removing the animation class to allow the animation to play
    setTimeout(() => {
      taskItem.classList.remove("task-enter");
    }, 300);
  } else {
    Swal.fire({
      title: "Validation Error",
      text: "Please provide a valid entry for the todo list.",
      icon: "info",
      showConfirmButton: true,
    });
  }
}

// Function to remove a task
function removeTask(taskId, taskItem) {
  // Remove the task from local storage using its unique ID
  localStorage.removeItem(`task_${taskId}`);

  // Remove the task item with animation class
  taskItem.classList.add("task-exit");

  // Delay removing the task item from the DOM after the animation
  setTimeout(() => {
    taskItem.remove();
  }, 300);
}

// Initial load: Retrieve and display tasks from local storage
window.onload = function () {
  const taskList = document.getElementById("task-list");

  // Iterate through local storage items and create tasks for each
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("task_")) {
      const taskId = key.substring(5); // Extract the unique ID
      const taskText = localStorage.getItem(key);

      const taskItem = document.createElement("li");
      taskItem.innerText = taskText;

      const removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.addEventListener("click", () => {
        removeTask(taskId, taskItem);
      });

      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
    }
  }
};




// function validateInput(inputField) {
//   const invalidChars = [',', '[', ']','"'];
//   const inputValue = inputField.value;
//   let sanitizedValue = "";

//   for (let i = 0; i < inputValue.length; i++) {
//       if (!invalidChars.includes(inputValue[i])) {
//           sanitizedValue += inputValue[i];
//       }
//   }

//   inputField.value = sanitizedValue;
// }