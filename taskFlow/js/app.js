const input=document.getElementById('task-input');
const button_value=document.getElementById('add-btn');


button_value.addEventListener("click",function(e){
const value=input.value;
if(value === ""){
    alert("Task can't be empty");
    return ;
}
addTask(value);
renderTask();
console.log(tasks);

input.value="";



})



