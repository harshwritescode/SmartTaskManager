const task_list = document.getElementById('task-list');

function renderTask() {
    task_list.innerHTML = "";

    const table = document.createElement('table')
    table.className = "tableClass";

    const tablebody = document.createElement('tbody');

    //get data from the state.js

    const tasks = getFilteredTasks();

    tasks.forEach((task) => {

        const row = document.createElement('tr');

        const column1 = document.createElement('td');
        column1.innerText = task.text;

        const column2 = document.createElement('td');
        column2.innerText = task.status;

        const column3 = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";

        const editButton = document.createElement('button');
        editButton.innerText = "Edit";

        const todoButton = document.createElement('button');
        todoButton.innerText = task.status === "done" ? "Undo" : "Done";

        deleteButton.addEventListener("click", function () {
            deleteTask(task.id);
            renderTask();
        });

        editButton.addEventListener("click", function () {
            const newText = prompt("Edit your task:", task.text);
            if (newText === null || newText.trim() === "") return;
            editTask(task.id, newText);
            renderTask();
        })
        todoButton.addEventListener("click", function () {

            toggleTaskStatus(task.id);
            renderTask();
        });

        document.getElementById("all-btn").addEventListener("click", () => {
            currentFilter = "all";
            renderTask();
        });

        document.getElementById("todo-btn").addEventListener("click", () => {
            currentFilter = "todo";
            renderTask();
        });

        document.getElementById("done-btn").addEventListener("click", () => {
            currentFilter = "done";
            renderTask();
        });

        column3.appendChild(editButton);
        column3.appendChild(deleteButton);
        column3.appendChild(todoButton);

        row.appendChild(column1);
        row.appendChild(column2);
        row.appendChild(column3);

        tablebody.appendChild(row);
    })

    table.appendChild(tablebody);
    task_list.appendChild(table);

}




// console.log(table);


