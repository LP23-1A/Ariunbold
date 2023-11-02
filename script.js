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

function openPopup() {
    popup.classList.add("flex");
}

function closePopup() {
    popup.classList.remove("flex");
}

const data = [];

const mockData = {
    title: "",
    desc: "",
    status: "",
    priority: "",
};

function render(data) {
    
    for (let i = 0; i < data.length; i++){
        if (data[i].status === "To Do"){
            toDo.innerHTML += createCard(data[i]);
        }
        if (data[i].status === "In progress"){
            inProgress.innerHTML += createCard(data[i]);
        }
        if (data[i].status === "Stuck"){
            stuck.innerHTML += createCard(data[i]);
        }
        if (data[i].status === "Done"){
            done.innerHTML += createCard(data[i]);
        }
    }
}


function addCard(){
    
    mockData.title = input.value;
    mockData.desc = textArea.value;
    mockData.status = select.value;
    mockData.priority = difficult.value;

    toDo.innerHTML = "";
    inProgress.innerHTML = "";
    stuck.innerHTML = "";
    done.innerHTML = "";

    
    popup.classList.remove("flex");
    data.push(mockData);
    render(data);
}




function createCard(card, index) {
    const { title, desc, priority } = card;
    return `<div class="list">
                <div class="icon"><img class="center" src="img/tick.png" alt="" width="12px" height="12px"></div>
                <div class="details">
                    <h4>${title}</h4>
                    <p>${desc}</p>
                    <div class="priority">${priority}</div>
                </div>
                <div class="actions">
                    <div class="icon remove" onclick="removeCard(${index})"><img src="img/x.png" alt="" width="12px" height="12px"></div>
                    <div class="icon"><img src="img/note.png" alt="" width="12px" height="12px"></div>
                </div>
            </div>`;
}

function removeCard(index) {
    data.splice(index, 1);
    render(data);
}

listContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        const cardIndex = Array.from(listContainer.querySelectorAll(".list")).indexOf(event.target.parentElement.parentElement);
        if (cardIndex !== -1) {
            removeCard(cardIndex);
        }
    }
});


button.onclick = addCard;
exit[0].onclick = closePopup;

addbtn[0].onclick = openPopup;
addbtn[1].onclick = openPopup;
addbtn[2].onclick = openPopup;
addbtn[3].onclick = openPopup;