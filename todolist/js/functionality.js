
function newElement() {
  const task = document.querySelector("#task");
  if (!(task.value.trim().length == 0)) {
    let newLi = document.createElement("li");
    let ulDOM = document.querySelector("#list");
    
    newLi.insertAdjacentHTML("beforeend", `${task.value}<span class="close">×</span>`)
    const xMark = newLi.lastChild.previousSibling;
    ulDOM.appendChild(newLi);
    ulDOM.lastChild.addEventListener("click", (e) => e.currentTarget.classList.toggle("checked"))
    xMark.addEventListener("click", (e) => newLi.remove())
  }
  task.value = ""
}

let allLists = document.querySelector("#list").children;

Array.from(allLists).forEach(element => {
  element.addEventListener("click", (e) => e.currentTarget.classList.toggle("checked"))
  element.insertAdjacentHTML("beforeend", `<span class="close">×</span>`)
  element.lastChild.addEventListener("click", (e) => element.remove())
});
