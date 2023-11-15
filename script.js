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
    input.value = "";
    textArea.value = "";
    select.value = "";
    difficult.value = "";
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
    
    let maincount = {
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
            maincount.todoCount += 1;
        }
        if (data[i].status === "In progress") {
            inProgress.innerHTML += createCard(data[i]);
            maincount.inProgressCount += 1;
        }
        if (data[i].status === "Stuck") {
            stuck.innerHTML += createCard(data[i]);
            maincount.stuckCount += 1;
        }
        if (data[i].status === "Done") {
            done.innerHTML += createCard(data[i]);
            maincount.doneCount += 1;
        }
    }

    todoCount.innerText = maincount.todoCount;
    inProgressCount.innerText = maincount.inProgressCount;
    stuckCount.innerText = maincount.stuckCount;
    doneCount.innerText = maincount.doneCount;
    

    let deleteIcon = document.querySelectorAll('.remove');
    let edit = document.querySelectorAll(".edit");
    let finish = document.querySelectorAll(".finish");

    for (let i = 0; i < deleteIcon.length; i++) {
        deleteIcon[i].onclick = () => {
            removeCard(deleteIcon[i])
        }
        edit[i].onclick = () => {
            editCard(edit[i]);
        }
        finish[i].onclick = () => {
            finishTask(finish[i]);
        }
        dragAndDrop(data[i]);
    }
}

function dragAndDrop(el) {
    console.log(id);
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
        });
    });

    listCard.forEach((container, index) => {
        container.addEventListener("dragover", (event) => {
            event.preventDefault();
        });
        container.addEventListener("dragenter", (event) => {
            event.preventDefault();
            if (draggedItem) {
                const draggingContainer = draggedItem.parentNode;
                if (draggingContainer !== event.currentTarget) {
                    event.currentTarget.querySelector('.list-container').appendChild(draggedItem);
                    for (let i = 0; i < data.length; i++){
                        const id = draggedItem.getAttribute("data-id");
                        if (data[i].id === id){
                            if (index === 0){
                                data[i].status = "To Do";
                            }
                            else if (index === 1){
                                data[i].status = "In progress";
                            }
                            else if (index === 2){
                                data[i].status = "Stuck";
                            }
                            else if (index === 3){
                                data[i].status = "Done";
                            }
                        }
                        console.log(data[i].status);
                    }
                    
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
                <div class="icon finish" id="${id}"><img class="center" src="img/tick.png" alt="" width="12px" height="12px"></div>
                <div class="details">
                    <h4>${title}</h4>
                    <p>${desc}</p>
                    <div class="priority">${priority}</div>
                </div>
                <div class="actions">
                    <div class="icon remove" id="${id}"><img src="img/x.png" alt="" width="12px" height="12px"></div>
                    <div class="icon edit" id="${id}"><img src="img/note.png" alt="" width="12px" height="12px"></div>
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

function editCard(element) {
console.log("working");
console.log(data);
    const id = element.id;

    popup.classList.add("flex");

    for (let i = 0; i < data.length; i++) {

        if (id === data[i].id){
            console.log(id);
            input.value = data[i].title;
            textArea.value = data[i].desc;
            select.value = data[i].status;
            difficult.value = data[i].priority;

            button.onclick = () => {

                data[i].title = input.value;
                data[i].desc = textArea.value;
                data[i].status = select.value;
                data[i].priority = difficult.value;

                render(data);

                popup.classList.remove("flex");

                button.onclick = addCard;

                input.value = "";
                textArea.value = "";
                select.value = "";
                difficult.value = "";
            }
        }
    }
}

function finishTask(element){
    const id = element.id;
    for (let i = 0; i < data.length; i++){
        if (id === data[i].id){
            data[i].status = "Done";
            render(data);
        }
    }
}


button.onclick = addCard;
exit[0].onclick = closePopup;

addbtn[0].onclick = openPopup;
addbtn[1].onclick = openPopup;
addbtn[2].onclick = openPopup;
addbtn[3].onclick = openPopup;

render(data)