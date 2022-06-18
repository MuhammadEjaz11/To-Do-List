var btn = document.getElementById('addbtn').addEventListener('click', addTask);
let data = [];
let taskmenu = false;
let taskmenu1 = document.querySelector('.add-items');
let taskbtn1 = document.querySelector('.addtaskbtn');
let complete = document.getElementById('complete');

taskbtn1.addEventListener('click', showHide);

function showHide(){
    if (taskmenu == false){
        taskmenu1.style.transform = "translateY(0%)";
        taskmenu = true;
        taskbtn1.innerHTML = "Close"
    }else{
        taskmenu1.style.transform = "translateY(-100%)";
        taskbtn1.innerHTML = "Add New Task"

        taskmenu = false

    }
}




function addTask() {
    var cont = document.getElementById('tasks');
    var title = document.getElementById('title');
    var description = document.getElementById('description');
    var date = document.getElementById('date');
    const task = document.createElement("div");
    
    if (title.value == "" && description.value == "") {
        alert("Please add task")
    }
    else {
        dataPush();
        task.innerHTML =
            `<div id="tasklist" class="list-wrapper">
            <div class="list-wrapper"><div><h4 id="complete">${title.value}</h4>
                    <ul class="d-flex flex-column-reverse todo-list">
                        <li> ${description.value} </li>
                    </ul>
                    <p>${date.value} </p>
                </div>
                <div class="taskbtn">
                    <button onclick="completetask(this)" class="edit"> Comppleted</button>
                    <button onclick="deleteFn(this)" class="delete"> Delete</button>
                </div>
            </div>
        </div>`
        cont.appendChild(task);
        
        title.value = "";
        description.value = "";
        date.value = "";
    }
}

function dataPush(){
    
        data.push({
            title: title.value,
            description: description.value,
            data: date.value,
        })
        localStorage.setItem("data", JSON.stringify(data) );
}

function deleteFn(e){
 e.parentElement.parentElement.remove();
}

function completetask(e){
    let completetask = e.parentElement.parentElement.firstChild.firstChild;
    completetask.style.textDecoration = "line-through";
    completetask.style.color = "gray";
    }