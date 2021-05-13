
function newElement() {

    document.querySelector("#liveToast").className="toast show"
    const exit = document.createElement("span");
    exit.className = "close"
    exit.innerText="x"

    const li = document.createElement("li")
    const taskValue = document.getElementById("task").value
    li.innerText= (taskValue === "" || taskValue === null ) ? null : taskValue
    const taskList = document.getElementById("list")
    li.className = li.className+" list-group-item"
    li.appendChild(exit)
    li.onclick = () => haveDone(li)
    li.style="cursor: pointer"
    exit.onclick= () => exit.parentElement.remove();

    if(taskValue !== "" && taskValue !== null){
        taskList.appendChild(li);
        // document.querySelectorAll("li").forEach(item => item.appendChild(exit));
    }

    document.getElementById("task").value=""
    setTimeout(()=> document.querySelector(
        "#liveToast").className="toast",3000)
}
function removeElement(exit) {
    console.log(exit)
      exit.parentElement.remove()
}
function haveDone(element) {
    element.innerHTML.includes("\u2714") ? null :(element.innerHTML = ("\u2714" + element.innerHTML))
    console.log(element.innerHTML.style)
    element.style="text-decoration:line-through"
    element.lastChild.onclick= () => element.lastChild.parentElement.remove()

}
