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
    tasks=tasks.map((task)=>{
  if(task.id==id){
    return {
        ...tasks,
        status: task.status==="todo"?"done":"todo"
    }
  }
  return task;
    })
}


function editTask(id,newText){
   tasks=tasks.map((task)=>{
       if(task.id==id){
        return {
          ...tasks,
          text:newText
        }
       }
       return tasks;
   })
}

function getTasks() {
    return tasks;
}

function taskStorage(){
  localStorage.setItem("Tasks",JSON.stringify((tasks)));
}

function loadTask(){
  const data=localStorage.getItem("Tasks");

  if(data){
    tasks=JSON.parse(data);
  }
}