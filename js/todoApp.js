
function newElement() {
    const exit = document.createElement("span");
    exit.className = "close"
    exit.innerText="x"
    exit.style.cursor="pointer"
    const li = document.createElement("li")
    const taskValue = document.getElementById("task").value
    const valueTag = document.createElement("span");
    valueTag.innerText =  (taskValue === "" || taskValue === null ) ? null : taskValue
    li.append(valueTag)
    const taskList = document.getElementById("list")
    li.className = li.className+" list-group-item"
    li.appendChild(exit)
    li.onclick = () => haveDone(li)
    li.style="cursor: pointer"
    exit.onclick= () => exit.parentElement.remove();

    if(taskValue !== "" && taskValue !== null){
        document.querySelector("#liveToast").className="toast show"
        setTimeout(()=> document.querySelector(
            "#liveToast").className="toast",3000)
        taskList.appendChild(li);
        // document.querySelectorAll("li").forEach(item => item.appendChild(exit));
    }else{
        const warning = document.querySelector("#liveToastNull");
        warning.className="toast error show"
        setTimeout(()=> warning.className="toast error hide",2000)
    }

    document.getElementById("task").value=""

}
function removeElement(exit) {
    console.log(exit)
      exit.parentElement.remove()
}
function haveDone(element) {
   const succesIcon = document.createElement("span")
    succesIcon.innerText="\u2714";
    element.firstChild.innerText.includes("\u2714") ? null : (element.insertBefore(succesIcon,element.firstChild))
    element.childNodes[1].style="text-decoration:line-through"
    element.style.cursor="default"
    element.lastChild.style.cursor="pointer"
    element.lastChild.onclick= () => element.lastChild.parentElement.remove()
}
