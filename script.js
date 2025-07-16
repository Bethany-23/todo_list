
const todoArray = [];
const input = document.getElementById("todo");
const display = document.getElementById("unord-li");
let listItems=" ";

function saveTodo(){

    todoArray.push(input.value)

    for(let i = 0; i<todoArray.length; i ++){
        display.innerHTML += "<li>"+ todoArray[i] +"</li>";
    
    }

}
