/* Task 1 */
var headingText = document.getElementById('heading')
console.log(headingText.textContent)


/* Task 2 using plain JavaScript */
//2a
function addText(event){
    var p = document.createElement('p')
    p.innerHTML = "Hello World"
    p.style.color = "red"
    var div = document.getElementById('task2a')
    div.appendChild(p)
    console.log(event.target)
}
//2b
function bgChange(event){
    //var body = document.getElementsByTagName('body')
    document.body.style.background = event.target.innerText.toLowerCase();
}
// function bgGreen(event){
//     //var body = document.getElementsByTagName('body')
//     document.body.style.background = "Green";
// }
//2c
function goToGoogle(event){
    //window.location ='https://www.google.com/';
    window.open("https://www.google.com/", "_blank");
}

/* Task 4 using jQuery */
