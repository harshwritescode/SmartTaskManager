
const input = document.getElementById('task-input');
const button_value = document.getElementById('add-btn');


loadTask();
renderTask();


button_value.addEventListener("click", function () {

    const value = input.value;

    if (value === "") {
        alert("Task can't be empty");
        return;
    }

    addTask(value);
    taskStorage();   // save
    renderTask();    // update UI

    input.value = "";
});