const task_list=document.getElementById('task-list');

function renderTask(){
    task_list.innerHTML="";

    const table=document.createElement('table')
    table.className="tableClass";

    const tablebody=document.createElement('tbody');

    //get data from the state.js

    const tasks=getTasks();

    tasks.forEach((task)=>{

        const row=document.createElement('tr');

        const column1=document.createElement('td');
        column1.innerText=task.text;

        const column2=document.createElement('td');
        column2.innerText=task.status;

        const column3=document.createElement('td');
        const deleteButton=document.createElement('button');
        deleteButton.innerText="Delete";

        const editButton=document.createElement('button');
        edditButton.innerText="Edit";

        deleteButton.addEventListener("click",function (){
             deleteTask(task.id);
             renderTask();
        });

        editButton.addEventListener("click",function(){
            const newText = prompt("Edit your task:", task.text);
                if (newText === null || newText.trim() === "") return;
                editTask(task.id, newText);
                renderTask();
        })

         column3.appendChild(editButton);
         column3.appendChild(deleteButton);

        row.appendChild(column1);
        row.appendChild(column2);
        row.appendChild(column3);

        tablebody.appendChild(row);
    })

    table.appendChild(tablebody);
    task_list.appendChild(table);

}




// console.log(table);


