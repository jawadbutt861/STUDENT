let head = document.querySelector(".heading");

let input = document.querySelector("#input");

function getvalue()
{
    head.innerHTML = `Hello ${input.value}`
}

// function change(){
// head.innerHTML = "Changed using Js";
// head.style.color = "blue";
// head.style.fontSize = "60px";
// }