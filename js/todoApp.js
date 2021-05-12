
function newElement() {
    const exit = document.createElement("span");
    exit.className = "close"
    exit.innerText="x"
    exit.onclick= () => exit.parentElement.remove();
    const li = document.createElement("li")
    li.innerText=document.getElementById("task").value
    const taskList = document.getElementById("list")

    li.className = li.className+" list-group-item"
    taskList.appendChild(li);
    document.querySelectorAll("li").forEach(item => item.appendChild(exit));

}
function removeElement(exit) {
    console.log(exit)
      exit.parentElement.remove()
}
