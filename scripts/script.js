const addButton = document.querySelector('button');
const text = document.querySelector('#input');
const dateInput = document.querySelector('#date');

const tasks = [];
const todoList = document.querySelector('#todolist');

addButton.addEventListener('click', () => {
	renderTodo();
});

function renderTodo() {
	const dateValue = dateInput.value;
	const value = text.value;
	const paragraph = document.createElement('p');
	const deleteBtn = document.createElement('button');

	if (!value.trim()) {
		console.log('Please enter a task!');
		return;
	}

	tasks.push({
		name: value,
		date: dateValue
	});

	const { name, date } = tasks[tasks.length - 1];

	paragraph.textContent = `${name} ${date}`;
	deleteBtn.textContent = 'Delete';
	deleteBtn.addEventListener('click', () => {
		paragraph.remove();
		deleteBtn.remove();
	});

	todoList.appendChild(paragraph);
	todoList.appendChild(deleteBtn);

	text.value = '';
	dateValue.value = '';
}
