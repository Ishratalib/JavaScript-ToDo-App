let todos = [];
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoCounter = document.getElementById('todo-counter');
const deleteCompletedBtn = document.getElementById('delete-completed-btn');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  
  if (!text) return; 

  const newTodo = {
    id: Date.now(), 
    text: text,
    completed: false
  };

  todos.push(newTodo);
  todoInput.value = ''; 
  renderTodos(); 
});

function renderTodos() {
  todoList.innerHTML = ''; 

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = `flex items-center justify-between p-4 border border-neutral-200 rounded-2xl transition-all ${
      todo.completed ? 'opacity-50 bg-neutral-50' : 'bg-white'
    }`;

    li.innerHTML = `
      <div class="flex items-center gap-3 w-full">
        <input 
          type="checkbox" 
          ${todo.completed ? 'checked' : ''} 
class="w-5 h-5 rounded border-neutral-300 accent-emerald-500 cursor-pointer"
          onchange="toggleStatus(${todo.id})"
        >
        <span 
          ondblclick="editTask(${todo.id})"
          title="Double click to edit"
class="text-neutral-700 flex-1 cursor-pointer select-none ${todo.completed ? 'line-through decoration-emerald-500 text-neutral-400' : ''}"
        >
          ${todo.text}
        </span>
      </div>
           <button 
        onclick="deleteTask(${todo.id})" 
        class="text-xs text-red-500 hover:text-red-500 font-bold tracking-wider transition-colors px-2 cursor-pointer"
      >
        Delete
      </button>

    `;
    todoList.appendChild(li);
  });

  updateCounter();
  const hasCompleted = todos.some(todo => todo.completed);
  if (deleteCompletedBtn) {
    if (hasCompleted) {
      deleteCompletedBtn.classList.remove('hidden');
    } else {
      deleteCompletedBtn.classList.add('hidden');
    }
  }
}

function toggleStatus(id) {
  todos = todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

function editTask(id) {
  const todoToEdit = todos.find(todo => todo.id === id);
  if (!todoToEdit) return;

  const newText = prompt("Edit your task:", todoToEdit.text);
  
  if (newText !== null && newText.trim() !== "") {
    todoToEdit.text = newText.trim();
    renderTodos();
  }
}

function deleteTask(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}
function deleteCompletedTasks() {
  todos = todos.filter(todo => !todo.completed);
  renderTodos();
}

function updateCounter() {
  const remaining = todos.filter(todo => !todo.completed).length;
  todoCounter.textContent = `Your remaining Todos : ${remaining}`;
}

window.toggleStatus = toggleStatus;
window.editTask = editTask;
window.deleteTask = deleteTask;
window.deleteCompletedTasks = deleteCompletedTasks;
if (deleteCompletedBtn) {
  deleteCompletedBtn.addEventListener('click', deleteCompletedTasks);
}