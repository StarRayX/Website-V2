export default class todoAPI {
    static getAllTasks() {
        const tasks = JSON.parse(localStorage.getItem("todolist-tasks") || "[]");
        return tasks;
    }

    static addTask(taskToAdd) {
        const tasks = this.getAllTasks();

        taskToAdd.id = Math.floor(Math.random()*1000000);
        taskToAdd.completed = false;
        tasks.push(taskToAdd);

        localStorage.setItem("todolist-tasks", JSON.stringify(tasks));
    }

    static deleteTask(id) {
        const tasks = this.getAllTasks();

        const updTasks = tasks.filter((task) => task.id !== id);
        localStorage.setItem("todolist-tasks", JSON.stringify(updTasks))
    }
}

//29:47