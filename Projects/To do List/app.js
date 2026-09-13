const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let editTodo = null;

// Add Todo
const addTodo = () => {
    const inputText = inputBox.value.trim();

    if (inputText === "") {
        alert("Please enter a task!");
        return;
    }

    // Edit Mode
    if (addBtn.value === "Update") {
        editTodo.target.previousElementSibling.innerText = inputText;
        updateLocalStorage();

        addBtn.value = "Add";
        inputBox.value = "";
        editTodo = null;
        return;
    }

    createTodo(inputText);
    saveLocalTodo(inputText);

    inputBox.value = "";
};

// Create Todo Element
const createTodo = (text) => {
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = text;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");

    li.appendChild(p);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
};

// Handle Edit & Delete
const updateTodo = (e) => {

    // Delete
    if (e.target.classList.contains("deleteBtn")) {
        const li = e.target.parentElement;

        deleteLocalTodo(li.children[0].innerText);

        li.remove();
    }

    // Edit
    if (e.target.classList.contains("editBtn")) {
        inputBox.value =
            e.target.previousElementSibling.innerText;

        inputBox.focus();

        addBtn.value = "Update";

        editTodo = e;
    }
};

// Save Todo to Local Storage
const saveLocalTodo = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));
};

// Load Todos
const getLocalTodos = () => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach((todo) => {
        createTodo(todo);
    });
};

// Delete Todo from Local Storage
const deleteLocalTodo = (todoText) => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos = todos.filter((todo) => todo !== todoText);

    localStorage.setItem("todos", JSON.stringify(todos));
};

// Update Local Storage after Edit
const updateLocalStorage = () => {
    const todos = [];

    document.querySelectorAll("#todoList li p").forEach((item) => {
        todos.push(item.innerText);
    });

    localStorage.setItem("todos", JSON.stringify(todos));
};

// Enter Key Support
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

// Events
document.addEventListener("DOMContentLoaded", getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);