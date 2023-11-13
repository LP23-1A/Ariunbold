let popup = document.getElementById("popup");
let addbtn = document.getElementsByClassName("add-btn");
let button = document.querySelector("button");
let body = document.querySelector("body");
let exit = document.getElementsByClassName("close");
let listCard = document.querySelectorAll(".list-card");
let warn = document.getElementsByClassName("error");
let input = document.querySelector("input");
let textArea = document.querySelector("textarea");
let difficult = document.getElementById("difficult");
let listContainer = document.querySelectorAll(".list-container");
let remove = document.querySelector(".remove");
let select = document.getElementById("selector");
let toDo = document.getElementById("toDo");
let inProgress = document.getElementById("inProgress");
let stuck = document.getElementById("stuck");
let done = document.getElementById("done");
let count = document.querySelector(".count");
let todoCount = document.getElementById("todo-count");
let inProgressCount = document.getElementById("inprogress-count");
let stuckCount = document.getElementById("stuck-count");
let doneCount = document.getElementById("done-count");
let errortxt = document.querySelector("error-text");

let draggedItem = null;


function openPopup() {
    popup.classList.add("flex");
}

function closePopup() {
    popup.classList.remove("flex");
}

const id = () => {
    return 'id-' + Math.random();
}

let data = [
    {
        id: id(),
        title: 'Todo list',
        desc: "Ramdom things",
        status: "To Do",
        priority: "High"
    },
    {
        id: id(),
        title: 'Done list',
        desc: "Ramdom things",
        status: "Done",
        priority: "Medium"
    }
];


function render(data) {

    const count = {
        todoCount: 0,
        inProgressCount: 0,
        stuckCount: 0,
        doneCount: 0
    }

    toDo.innerHTML = "";
    inProgress.innerHTML = "";
    stuck.innerHTML = "";
    done.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "To Do") {
            toDo.innerHTML += createCard(data[i]);
            count.todoCount += 1;
        }
        if (data[i].status === "In progress") {
            inProgress.innerHTML += createCard(data[i]);
            count.inProgressCount += 1;
        }
        if (data[i].status === "Stuck") {
            stuck.innerHTML += createCard(data[i]);
            count.stuckCount += 1;
        }
        if (data[i].status === "Done") {
            done.innerHTML += createCard(data[i]);
            count.doneCount += 1;
        }
    }

    todoCount.innerText = count.todoCount;
    inProgressCount.innerText = count.inProgressCount;
    stuckCount.innerText = count.stuckCount;
    doneCount.innerText = count.doneCount;

    let deleteIcon = document.querySelectorAll('.remove');
    let edit = document.querySelectorAll(".edit");

    for (let i = 0; i < deleteIcon.length; i++) {
        deleteIcon[i].onclick = () => {
            removeCard(deleteIcon[i])
        }
        edit[i].onclick = editCard;
        console.log(deleteIcon[i]);
    }
    dragNdrop()
}


function dragNdrop() {

    let lists = document.querySelectorAll(".list");
    lists.forEach((lists) => {
        lists.addEventListener("dragstart", (event) => {
            event.target.value;
            draggedItem = event.target;
            event.dataTransfer.setData(
                "text",
                event.target.getAttribute("data-id")
            );
        });

        lists.addEventListener("dragend", () => {
            draggedItem = null;
        });
    });

    listCard.forEach((container) => {
        container.addEventListener("dragover", (event) => {
            event.preventDefault();
        });
        container.addEventListener("dragenter", (event) => {
            event.preventDefault();
            if (draggedItem) {
                const draggingContainer = draggedItem.parentNode;
                if (draggingContainer !== event.currentTarget) {
                    event.currentTarget.querySelector('.list-container').appendChild(draggedItem);
                    
                }
            }
        });
        container.addEventListener("dragleave", () => { });
        container.addEventListener("drop", (event) => {
            event.preventDefault();
        });
    })
}


function addCard() {
    const mockData = {
        id: id(),
        title: input.value,
        desc: textArea.value,
        status: select.value,
        priority: difficult.value,
    };

    data.push(mockData);
    render(data);

    input.value = "";
    textArea.value = "";
    select.value = "";
    difficult.value = "";

    popup.classList.remove("flex");
}

function createCard(card) {
    const { title, desc, priority, id } = card;
    return `<div draggable="true" class="list" data-id=${id}>
                <div class="icon"><img class="center" src="img/tick.png" alt="" width="12px" height="12px"></div>
                <div class="details">
                    <h4>${title}</h4>
                    <p>${desc}</p>
                    <div class="priority">${priority}</div>
                </div>
                <div class="actions">
                    <div class="icon remove" id="${id}"><img src="img/x.png" alt="" width="12px" height="12px"></div>
                    <div class="icon edit"><img src="img/note.png" alt="" width="12px" height="12px"></div>
                </div>
            </div>`;
}

function removeCard(element) {
    const id = element.id;

    const newArr = data.filter(el => {
        return el.id !== id
    })

    data = newArr

    render(data);
}

function editCard() {
    popup.classList.add("flex");

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
        console.log(data[i].desc);
        console.log(data[i].status);
        console.log(data[i].priority);
    }
}




button.onclick = addCard;
exit[0].onclick = closePopup;

addbtn[0].onclick = openPopup;
addbtn[1].onclick = openPopup;
addbtn[2].onclick = openPopup;
addbtn[3].onclick = openPopup;

render(data)