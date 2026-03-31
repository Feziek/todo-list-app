# Todo List Prototype

A lightweight, vanilla JavaScript application designed to help users manage daily tasks with associated deadlines. This project focuses on efficient DOM manipulation and dynamic content rendering.

---

## 🚀 Features

* **Task Management:** Capture task names and specific dates.
* **Dynamic Rendering:** Real-time updates to the UI as tasks are added.
* **Data Validation:** Includes logic to prevent empty tasks from being added to the list.
* **Interactive Controls:** Each task is generated with its own functional "Delete" button for individual removal.

## ⚙️ How It Works

1.  **Selection:** The script selects DOM elements using `querySelector` to interact with the input fields and the display container.
2.  **Object Storage:** Tasks are stored as objects within a `tasks` array, keeping data organized:
    ```javascript
    { name: "Task Name", date: "YYYY-MM-DD" }
    ```
3.  **Event Handling:** The "Add" button triggers the `renderTodo()` function, while each "Delete" button is assigned a specific listener upon creation to handle its own removal from the DOM.

## 📝 Usage

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Enter a task name and select a date.
4. Click **Add** to populate your list.

## 💡 Future Enhancements

* **Persistent Storage:** Implementing `localStorage` to save tasks across browser sessions.
* **Task Updates:** Adding a feature to edit existing tasks without deleting them.
* **Array Management:** Enhancing the delete logic to remove items from the internal `tasks` array state, ensuring data consistency.