const deleteTask = document.querySelector('.deleteTask')
const taskType = document.querySelector('#type')
const task = document.getElementById('task')
const form = document.getElementById('form')
const taskDescription = document.getElementById('task_description')
const output = document.getElementById('output')
const tableData = document.getElementById('table-data')

// taskType.addEventListener('mouseover', function(){
//     console.log('mouse over')
// })

// task.addEventListener('keyup', function(){
//     console.log(task.value)
// })
// console.log(deleteTask)

// Add task to the dom
form.addEventListener('submit', function(event){
    event.preventDefault()
    let taskvalue = task.value
    let tasKTypeValue = taskType.value
    let taskDescValue = taskDescription.value

    let id = 'id_'+Date.now()
    const data = {
        task: taskvalue,
        type: tasKTypeValue,
        taskDesc: taskDescValue,
        id: id
    }

    // Get and store task into localstorage
    let taskFromLs = getItems()
    taskFromLs.push(data)
    localStorage.setItem('tasks', JSON.stringify(taskFromLs))

    renderTask(data)

    // clear the form input
    task.value = ''
    taskDescription.value = ''
    taskType.value = ''
})

// Remove task from the DOM
tableData.addEventListener('click', function(e){
    let deleteElement = e.target

    if(deleteElement.classList.contains('deleteTask')){
        const parentTr = deleteElement.parentElement.parentElement
        parentTr.remove()
        
    }
})

// get items from locaLstorage
function getItems(){
    let tasks
    if(localStorage.getItem('tasks') != null){
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }else{
        tasks = []
    }

    return tasks
}

// render task
function renderTask(data){
    const htmlstr = `
        <td>${data.task}</td>
        <td>${data.type}</td>
        <td>${data.taskDesc}</td>
        <td style='color: red; cursor:pointer'>
            <a class="deleteTask btn btn-danger btn-sm" href="#" id="${data.id}">Delete</a>
        </td>
    `

    // render output
    let tr = document.createElement('tr')
    tr.innerHTML = htmlstr
    output.append(tr)
}