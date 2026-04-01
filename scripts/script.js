const addButton = document.querySelector('button');
const text = document.querySelector('#input');
const dateInput = document.querySelector('#date');
const tasksArr = JSON.parse(localStorage.getItem('taskItemArr')) || [];
const todoList = document.querySelector('#todolist');

renderSavedTodo();

addButton.addEventListener('click', addTask);

function renderTodo(taskItemObject) {
	const paragraph = document.createElement('p');
	const deleteBtn = document.createElement('button');

	const { name, date } = taskItemObject;

	paragraph.textContent = `${name} ${date}`;
	deleteBtn.textContent = 'Delete';
	deleteBtn.addEventListener('click', () => {
		const item = tasksArr.indexOf(taskItemObject);
		paragraph.remove();
		deleteBtn.remove();
		tasksArr.splice(item, 1);
		localStorage.setItem('taskItemArr', JSON.stringify(tasksArr));
	});

	todoList.appendChild(paragraph);
	todoList.appendChild(deleteBtn);

	text.value = '';
	dateInput.value = '';
	text.focus();
}

function renderSavedTodo() {
	tasksArr.forEach(savedTodo => {
		renderTodo(savedTodo);
	});
}

function addTask() {
	const taskName = text.value;
	const dueDate = dateInput.value;
	if (!taskName.trim()) return;

	const taskItem = {
		name: taskName,
		date: dueDate
	};

	tasksArr.push(taskItem);

	localStorage.setItem('taskItemArr', JSON.stringify(tasksArr));

	renderTodo(taskItem);
}
