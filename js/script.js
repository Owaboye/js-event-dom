// function display(name){
//     console.log(name)
// }

// // display('ADE')

// function greet(name, display){
//     display(name)
// }

// greet('ADE', display)

const taskEl = document.getElementById('task')

// console.log(taskEl.getAttribute('class'))

taskEl.setAttribute('data', 'Task-data')
// console.log(taskEl)

// Click event
const btn = document.querySelector('#btn')
// btn.addEventListener('click', function(event){
//     event.preventDefault()

//     console.log(event.type)
//     console.log(event.target)
// })

const headingEl = document.querySelector('h2')

// headingEl.style.display = 'none'

// Add class to an element
headingEl.classList.add('danger')

// Removes a class 
headingEl.classList.remove('danger')

// Change event
// const type = document.getElementById('type')
// type.addEventListener('change', () => {
//     console.log(type.value)
// })

// Submit event
const form = document.getElementById('form')
function submitForm(event){
    event.preventDefault()
    console.log('Submitted')
}
// console.log(form)

// Keyboard event
// taskEl.addEventListener('keydown', function(){
//     console.log(taskEl.value)
// })

// Mouse event
taskEl.addEventListener('mouseenter', function(){
    console.log('Mouse enter')
})

// DOM Manipulation
let p = document.createElement('p')
let text = document.createTextNode('I am learning JS DOM')
p.className = 'danger'
p.classList.add('bold')
p.appendChild(text) 
console.log(p)

const cardHeader = document.querySelector('.card-header')
cardHeader.append(p)