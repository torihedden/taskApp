var addToTaskList = document.querySelector('#add-to-tasklist');
var taskListItem = document.querySelector('#task-item');
var taskList = document.querySelector('#tasklist');

// Create new task
addToTaskList.addEventListener('submit', function (event) {

	event.preventDefault();
	if (taskListItem.value.length < 1) return;

	taskList.innerHTML += '<li>'
                     + '<span class="task-item-content">' + taskListItem.value + '</span>'
                     + '<span class="edit-item-button">Edit task</span>'
                     + '<span class="done-item-button">Mark as done</span>'
                     + '<span class="delete-item-button">X</span>'
                     + '<span class="edit-item-input hide">Edit task here'
                     + '<input value="' + taskListItem.value + '"></input>'
                     + '</span>'
                     + '</li>';
	taskListItem.value = '';

	localStorage.setItem('tasklistItems', taskList.innerHTML);
}, false);

// Read for existing tasks
window.onload = function() {
  var saved = localStorage.getItem('tasklistItems');
  if (saved) {
  	taskList.innerHTML = saved;
  }
}

// Update the task, including changing status (mark as done but not alter task contents or delete)
// as well as change contents of task

// Alter the text of the task
// taskList.addEventListener('click', function (event) {
//   if (event.target.className.toLowerCase() === 'edit-item-button') {
//
//     // show the edit input element
//     event.target.parentElement.querySelector('.edit-item-input').classList.remove('hide');
//
//     // submit the new task value
//
//     // update the task value with the new one supplied
//
//     // update localStorage with the new task list
//     localStorage.setItem('tasklistItems', taskList.innerHTML);
//   }
// });

// Mark the task as done, or re-open the task
taskList.addEventListener('click', function (event) {
  if (event.target.className.toLowerCase() === 'done-item-button') {

    var doneItemButton = event.target.parentElement.querySelector('.done-item-button');

    // toggle the "state" of this task
    if (event.target.parentElement.classList.contains('completed-item')) {
      event.target.parentElement.classList.remove('completed-item');
      doneItemButton.innerHTML = 'Mark as done';
    } else {
      event.target.parentElement.classList.add('completed-item')
      doneItemButton.innerHTML = 'Reopen';
    }

    // update localStorage with the new task list
    localStorage.setItem('tasklistItems', taskList.innerHTML);
  }
});

// Delete the task
taskList.addEventListener('click', function (event) {
  if (event.target.className.toLowerCase() === 'delete-item-button') {
    event.target.parentElement.remove();

    // update localStorage with the new task list
    localStorage.setItem('tasklistItems', taskList.innerHTML);
  }
});
