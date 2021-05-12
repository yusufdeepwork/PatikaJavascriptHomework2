
function newElement() {
    const li = document.createElement("li")
    li.innerText=document.getElementById("task").value
    const taskList = document.getElementById("list")
    taskList.appendChild(li);
}
