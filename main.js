// Get form, item, and tasklist
var addToTaskList = document.querySelector('#add-to-tasklist');
var taskListItem = document.querySelector('#task-item');
var taskList = document.querySelector('#tasklist');

addToTaskList.addEventListener('submit', function (event) {

	event.preventDefault();
	if (taskListItem.value.length < 1) return;

	taskList.innerHTML += '<li>' + taskListItem.value + '<span class="delete"> Delete task</span>' + '</li>';
	taskListItem.value = '';

	localStorage.setItem('tasklistItems', taskList.innerHTML);
}, false);

var saved = localStorage.getItem('tasklistItems');

if (saved) {
	taskList.innerHTML = saved;
}

// Delete the task
taskList.addEventListener('click', function (event) {
  if (event.target.className.toLowerCase() === 'delete') {
    event.target.parentElement.remove();
    localStorage.setItem('tasklistItems', taskList.innerHTML);
  }
});
