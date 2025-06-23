const form = document.getElementById('form')
const task = document.getElementById('task')
const taskType = document.getElementById('task-type')
const taskDesc = document.getElementById('task_description')
const output = document.querySelector('#output')

form.addEventListener('submit', function(event){
    event.preventDefault()
    let taskValue = task.value
    let taskTypeValue = taskType.value
    let taskDescriptionValue = taskDesc.value

    const data = {
        task: taskValue,
        taskType: taskTypeValue,
        taskDesc: taskDescriptionValue,
        status: false
    }

    const tr = document.createElement('tr')
    const htmlData = `
        <td>${data.task}</td>
        <td>${data.taskType}</td>
        <td>${data.taskDesc}</td>
        <td>${data.status ? 'Completed' : "Not Completed"}</td>
        <td>
            <span>Delete</span>
        </td>
    `
    tr.innerHTML =  htmlData

    task.value = ''
    taskType.value = ''
    taskDesc.value = ''
    
    output.append(tr)
})