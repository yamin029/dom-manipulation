/* Task 1 */
var headingText = document.getElementById('heading')
console.log(headingText.textContent)


/* Task 2 using plain JavaScript */
function addText(event){
    var p = document.createElement('p')
    p.innerHTML = "Hello World"
    var div = document.getElementById('task2a')
    div.appendChild(p)
    console.log(event.target)
}


/* Task 4 using jQuery */
