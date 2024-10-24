import { ref } from 'vue'
const debug = true
const todos = ref([]);

function addTodo(newValue) {
    if (debug) console.log('addTodo triggered with ', newValue)

    todos.value.push(newValue);
    saveTodos();
}

function loadTodos() {
    todos.value = localStorage.getItem('todos') ? Array.from(JSON.parse(localStorage.getItem('todos'))) : [];
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos.value));
}

function clearTodos() {
    todos.value = [];
    saveTodos();
}

function doneTodo(achievedTodo) {
    const index = todos.value.findIndex((todo) => todo.id == achievedTodo.id);
    if (index > -1) {
        todos.value.splice(index, 1);
    }
}

function populateInitialTodos() {
    todos.value = [
        {
            "id": "1",
            "name": "Appeler le plombier 1",
            "description": "Etablissement Gérard (06 01 02 03 04)",
            "type": "Business",
            "dueDate": "2024-10-26",
        },
        {
            "id": "2",
            "name": "Appeler le plombier 2",
            "description": "Etablissement Gérard (06 01 02 03 04)",
            "type": "Entertainment",
            "dueDate": "2024-10-26",
        },
        {
            "id": "3",
            "name": "Appeler le plombier 3",
            "description": "Etablissement Gérard (06 01 02 03 04)",
            "type": "Business",
            "dueDate": "2024-10-26",
        },
        {
            "id": "4",
            "name": "Appeler le plombier 4",
            "description": "Etablissement Gérard (06 01 02 03 04)",
            "type": "Family",
            "dueDate": "2024-10-26",
        },
        {
            "id": "5",
            "name": "Appeler le plombier 5",
            "description": "Etablissement Gérard (06 01 02 03 04)",
            "type": "Family",
            "dueDate": "2024-10-26",
        },
        {
            "id": "6",
            "name": "Appeler le plombier 6",
            "description": "Etablissement Gérard (06 01 02 03 04)",
            "type": "Family",
            "dueDate": "2024-10-26",
        },
        {
            "id": "7",
            "name": "Appeler le plombier 7",
            "description": "Etablissement Gérard (06 01 02 03 04)",
            "type": "Family",
            "dueDate": "2024-10-26",
        },
        {
            "id": "8",
            "name": "Appeler le plombier 8",
            "description": "Etablissement Gérard (06 01 02 03 04)",
            "type": "Family",
            "dueDate": "2024-10-26",
        },
    ];

    saveTodos();
}

loadTodos();

export function todoStore() {
    return {
        todos,
        addTodo,
        populateInitialTodos,
        clearTodos,
        doneTodo,
    }
}