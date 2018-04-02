var addToTaskList = document.querySelector('#add-to-tasklist');
var taskListItem = document.querySelector('#task-item');
var taskList = document.querySelector('#tasklist');

var taskSyncButton = document.querySelector('#sync-tasks-button');

// Read for existing tasks
window.onload = function() {
  var saved = localStorage.getItem('tasklistItems');
  if (saved) {
  	taskList.innerHTML = saved;
  }
}

// pull down all new tasks from server

// Create new task
addToTaskList.addEventListener('submit', function (event) {

	event.preventDefault();
	if (taskListItem.value.length < 1) return;

	taskList.innerHTML += '<li class="row">'
                     + '<span class="task-item-content four columns">' + taskListItem.value + '</span>'
                     + '<button class="edit-item-button">Edit task</button>'
                     + '<button class="done-item-button">Mark as done</button>'
                     + '<button class="delete-item-button">X</button>'
                     + '<button class="edit-item-input hide">Edit task here'
                     + '<input value="' + taskListItem.value + '"></input>'
                     + '</button>'
                     + '</li>';
	taskListItem.value = '';

	localStorage.setItem('tasklistItems', taskList.innerHTML);
}, false);

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
			event.target.parentElement.querySelector('.edit-item-button').removeAttribute('disabled');
    } else {
      event.target.parentElement.classList.add('completed-item')
      doneItemButton.innerHTML = 'Reopen';
			event.target.parentElement.querySelector('.edit-item-button').setAttribute('disabled', true);
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

// sync tasks
taskSyncButton.addEventListener('click', function (event) {
	// submit synced syncs

	// disable button
	taskSyncButton.setAttribute('disabled', true);

	taskSyncButton.innerHTML = 'Syncing...';

	// taskSyncButton.innerHTML = 'Tasks synced!';
  // taskSyncButton.innerHTML = 'Sync failed';

	// re-enable button
	// taskSyncButton.removeAttribute('disabled');

	// change text back to 'Sync tasks'
});
