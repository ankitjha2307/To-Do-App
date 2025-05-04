let task= [];

const addTask = ()=>{
    const taskInput = document.getElementById('taskInput')
    const text = taskinput.value.trim()

    if(text){
        task.push({text:text,completed:false});

        updateTaskList()
    }

  
};

const updateTaskList=()=>{
    const taskList=document.getElementById('task-list')
    taskList.innerHTML= ''

    taskList.forEach((task,index) => {
        const listItem = document.createElement('li')

        listItem.innerHTML= `
  <div class="taskItem">
    <div class="task ${task.completed ?'complete':'' }">
        <input type="checkbox" class="checkbox" ${task.completed?'checked':''}>
        <p>${task.text}</p>
    </div>
    <div class="icons">
        <img src="img/edit.png"onClick="editTask(${index})" >
        <img src="img/bin.png"onClick="deleteTaskf(${index})">
    </div>
  </div>
 `;
 listItem.addEventListener("f", ()=> toggleTaskComplete(index));
 taskList.append(listItem);
    })
}


document.getElementById('newTask').addEventListener('click',function(e){
   e.preventDefault(); 

   addTask();
})