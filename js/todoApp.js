
function newElement() {
    const exit = document.createElement("span");
    exit.className = "close"
    exit.innerText="x"
    exit.onclick= () => exit.parentElement.remove();
    const li = document.createElement("li")
    const taskValue = document.getElementById("task").value
    li.innerText= (taskValue === "" || taskValue === null ) ? null : taskValue
    const taskList = document.getElementById("list")

    if(taskValue !== "" && taskValue !== null){
        li.className = li.className+" list-group-item"
        taskList.appendChild(li);
        document.querySelectorAll("li").forEach(item => item.appendChild(exit));
    }
    document.getElementById("task").value=""
}
function removeElement(exit) {
    console.log(exit)
      exit.parentElement.remove()
}
