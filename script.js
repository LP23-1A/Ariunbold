let popup = document.getElementById("popup");
let addbtn = document.getElementsByClassName("add-btn");
let button = document.querySelector("button");
let exit = document.getElementsByClassName("close");
let listCard = document.getElementsByClassName("list-card");
let list = document.querySelector(".list");
let warn = document.getElementsByClassName("error");
let input = document.querySelector("input");
let textArea = document.querySelector("textarea");
let difficult = document.getElementById("difficult");
let listContainer = document.querySelector(".list-container");
let remove = document.querySelector(".remove");
let select = document.getElementById("selector");
let toDo = document.getElementById("toDo");
let inProgress = document.getElementById("inProgress");
let stuck = document.getElementById("stuck");
let done = document.getElementById("done");
let count = document.querySelector(".count");


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
        title: 'asd',
        desc: "asd",
        status: "To Do",
        priority: "low"
    },
    {
        id: id(),
        title: 'test',
        desc: "asd",
        status: "Done",
        priority: "low"
    }
];


function render(data) {

    toDo.innerHTML = "";
    inProgress.innerHTML = "";
    stuck.innerHTML = "";
    done.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "To Do") {
            toDo.innerHTML += createCard(data[i]);
        }
        if (data[i].status === "In progress") {
            inProgress.innerHTML += createCard(data[i]);
        }
        if (data[i].status === "Stuck") {
            stuck.innerHTML += createCard(data[i]);
        }
        if (data[i].status === "Done") {
            done.innerHTML += createCard(data[i]);
        }
    }

    let deleteIcon = document.querySelector('.remove')

    deleteIcon.onclick = () => {
        removeCard(deleteIcon)
    }


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
    return `<div class="list">
                <div class="icon"><img class="center" src="img/tick.png" alt="" width="12px" height="12px"></div>
                <div class="details">
                    <h4>${title}</h4>
                    <p>${desc}</p>
                    <div class="priority">${priority}</div>
                </div>
                <div class="actions">
                    <div class="icon remove" id="${id}"><img src="img/x.png" alt="" width="12px" height="12px"></div>
                    <div class="icon"><img src="img/note.png" alt="" width="12px" height="12px"></div>
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

button.onclick = addCard;
exit[0].onclick = closePopup;

addbtn[0].onclick = openPopup;
addbtn[1].onclick = openPopup;
addbtn[2].onclick = openPopup;
addbtn[3].onclick = openPopup;

render(data)