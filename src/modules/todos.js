
export default class Todo {

    constructor(name) {
        this.name = name;
    }

    createContainer() {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        todo.textContent = `${this.name}`;
        return todo;
    }

    
}