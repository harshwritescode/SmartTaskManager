let tasks=[];

//addTask
function addTask(text){ 
    const newTask = {
        id: Date.now(),
        text: text,
        status: "todo"
    };
    tasks.push(newTask);
}

//deleteTask
function deleteTask(id){
      tasks = tasks.filter(function(task){
          if(task.id!==id){
            return true;
          }else{
            return false;
          }
      })
}


function toggleTaskStatus(id){
    tasks=task.map((task)=>{
  if(task.id==id){
    return {
        ...tasks,
        status: task.status==="todo"?"done":"todo"
    }
  }
  return task;
    })
}

function getTasks() {
    return tasks;
}