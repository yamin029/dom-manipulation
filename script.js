/* Task 1 */
var headingText = document.getElementById('heading')
console.log(headingText.textContent)


/* Task 2 using plain JavaScript */
function addText(event){
    var p = document.createElement('p')
    p.innerHTML = "Hello World"
    p.style.color = "red"
    var div = document.getElementById('task2a')
    div.appendChild(p)
    console.log(event.target)
}

function bgChange(event){
    //var body = document.getElementsByTagName('body')
    document.body.style.background = event.target.innerText.toLowerCase();
}
// function bgGreen(event){
//     //var body = document.getElementsByTagName('body')
//     document.body.style.background = "Green";
// }


/* Task 4 using jQuery */
