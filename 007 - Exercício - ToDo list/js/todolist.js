const list = document.getElementById("todo-list")
const addItemInput = document.getElementById("item-input")
const addItemForm = document.getElementById("todo-add")
let arrTasks = JSON.parse(localStorage.getItem("tasks"))
let currentlyOpenEditContainer

const taskActions = {
    "delete": (object) => {
        arrTasks.splice(Array.from(list.children).indexOf(object.parentElement), 1)
        object.parentElement.remove()
        updateLocalStorage()
    },
    "edit": (object) => {
        if (currentlyOpenEditContainer)
            currentlyOpenEditContainer.style.display = ""
        currentlyOpenEditContainer = object.parentElement.querySelector(".editContainer")
        currentlyOpenEditContainer.style.display = "flex"
    },
    "confirmEdit": () => {
        let newText = currentlyOpenEditContainer.querySelector("input").value
        if (newText) {
            arrTasks[Array.from(list.children).indexOf(currentlyOpenEditContainer.parentElement)].name = newText
            currentlyOpenEditContainer.parentElement.querySelector(".task-name").textContent = newText
        }
        currentlyOpenEditContainer.style.display = ""
        currentlyOpenEditContainer = ""
        updateLocalStorage()
    },
    "cancelEdit": () => {
        let taskName = currentlyOpenEditContainer.parentElement.querySelector(".task-name").textContent
        currentlyOpenEditContainer.querySelector("input").value = taskName
        currentlyOpenEditContainer.style.display = ""
        currentlyOpenEditContainer = ""
    },
    "check": (object) => {
        let check = object.tagName == "I" ? object : object.querySelector("i")
        let listItem = object.tagName == "I" ? object.parentElement.parentElement : object.parentElement
        if (!check.classList.contains("displayNone")) {
            check.classList.add("displayNone")
            arrTasks[Array.from(list.children).indexOf(listItem)].completed = false
        } else {
            check.classList.remove("displayNone")
            arrTasks[Array.from(list.children).indexOf(listItem)].completed = true
        }
        updateLocalStorage()
    }
}

function generateLiTag(type, name, completed) {
    let liTag = ""
    if (type == "outer")
        liTag += `<li class="todo-item">`
    liTag +=`
        <button class="button-check" task-action="check">
            <i class="fas fa-check ${completed ? '':'displayNone'}" task-action="check"></i>
        </button>
        <p class="task-name">${name}</p>
        <i class="fas fa-edit" task-action="edit"></i>
        <div class="editContainer">
            <input class="editInput" type="text" value="${name}">
            <button class="editButton" task-action="confirmEdit">Edit</button>
            <button class="cancelButton" task-action="cancelEdit">Cancel</button>
        </div>
        <i class="fas fa-trash-alt" task-action="delete"></i>
    `
    if (type == "outer")
        liTag += `</li>`
    return liTag
}

function addItemToList(event) {
    
    let newTaskName = addItemInput.value || "Unnamed activity"
    
    let newTask = document.createElement("li")
    newTask.classList.add("todo-item")    
    newTask.innerHTML = generateLiTag("inner", newTaskName)
    
    list.appendChild(newTask)

    arrTasks.push({
        "name": newTaskName,
        "createdAt": Date.now(),
        "completed": false
    })
    updateLocalStorage()
    
    addItemInput.value = ""
    addItemInput.focus()
    event.preventDefault()
}

function itemOnClick(event) {
    
    const taskAction = event.target.getAttribute("task-action")

    if (!taskAction) return
    if (!taskActions[taskAction]) return
    taskActions[taskAction](event.target)

}

function loadTasks() {

    let listToLoadOnPage = ""

    arrTasks.forEach((task) => listToLoadOnPage += generateLiTag("outer", task.name, task.completed))

    list.innerHTML = listToLoadOnPage
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(arrTasks))
}

if (arrTasks == null)
    arrTasks = []

loadTasks()

addItemForm.addEventListener("submit", addItemToList)
list.addEventListener("click", itemOnClick)
