# JavaScript To Do App 📝

A simple and interactive **To Do application** built using HTML, JavaScript, and Tailwind CSS.

This project allows users to add tasks, mark them as completed, edit existing tasks, delete individual tasks, and delete all completed tasks.

## 🚀 Live Demo

[View the To Do App](https://ishratalib.github.io/JavaScript-ToDo-App/)

## ✨ Features

* ➕ Add new tasks
* ✅ Mark tasks as completed
* ✏️ Edit tasks by double-clicking
* 🗑️ Delete individual tasks
* 🧹 Delete all completed tasks
* 🔢 Display remaining incomplete tasks
* 🎨 Clean and responsive interface
* ⚡ Interactive UI using JavaScript DOM manipulation

## 🛠️ Technologies Used

* HTML5
* JavaScript
* Tailwind CSS
* GitHub Pages

## 📁 Project Structure

```text
JavaScript-ToDo-App/
│
├── index.html
├── main.js
├── .gitignore
└── README.md
```

## 🧩 How the App Works

### Add a Task

Enter a task in the input field and click the **+** button.

The task is stored as an object containing:

* `id`
* `text`
* `completed`

### Complete a Task

Click the checkbox next to a task to change its completed status.

Completed tasks receive a different visual style and are removed from the remaining task count.

### Edit a Task

Double-click the task text to edit it.

A prompt appears where the task can be updated.

### Delete a Task

Click the **Delete** button next to a task to remove it from the list.

### Delete Completed Tasks

When at least one task is completed, the **Delete Selected** button becomes visible.

Clicking it removes all completed tasks.

## 🔢 Remaining Tasks Counter

The application automatically counts incomplete tasks and displays the number of remaining Todos.

Example:

```text
Your remaining Todos : 3
```

The counter updates whenever tasks are added, completed, edited, or deleted.

## 💡 JavaScript Concepts Practiced

This project practices several JavaScript concepts:

* Arrays
* Objects
* Variables
* Functions
* Arrow functions
* Event listeners
* DOM manipulation
* Template literals
* `push()`
* `map()`
* `filter()`
* `find()`
* `some()`
* Object spread syntax
* `Date.now()`
* Conditional rendering

## 🎨 Styling

The application uses Tailwind CSS through its browser CDN.

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/Ishratalib/JavaScript-ToDo-App.git
```

Open the project in VS Code and run `index.html` using Live Server.

You can also open `index.html` directly in a browser.

## 📌 Note

Tasks are stored in a JavaScript array and are **not saved permanently**.

Refreshing the page will reset the Todo list because this version does not use Local Storage, a database, or a backend.

---

## 👩‍💻 Author

**Ishrat Talib**


---

⭐ A simple JavaScript project created to practice DOM manipulation, events, arrays, objects, and application logic.
