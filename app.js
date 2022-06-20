var btn = document.getElementById('addbtn').addEventListener('click', addTask);
let data = [];
let taskmenu = false;
let taskmenu1 = document.querySelector('.add-items');
let tasklistdiv = document.getElementById('tasks');
let taskbtn1 = document.querySelector('.addtaskbtn');
let complete = document.getElementById('complete');
var retData = JSON.parse(localStorage.getItem("data"));
taskbtn1.addEventListener('click', showHide);
let clears = document.getElementById('clearall').addEventListener('click', clearAll);


function retDataf(){
    if(retData !== null){
        console.log(retData);
        for (var i = 0; i < retData.length; i++) {
            
            let dName = retData[i].title;
            var dDescription = retData[i].description;
            var dDate = retData[i].data;
            const task = document.createElement("div");
            var cont = document.getElementById('tasks');
            task.innerHTML =
            `<div id="parentremove"><div id="tasklist" class="list-wrapper">
            <div class="list-wrapper"><div><h4 id="complete">${dName}</h4>
                    <ul class="d-flex flex-column-reverse todo-list">
                        <li> ${dDescription} </li>
                    </ul>
                    <p>${dDate} </p>
                </div>
                <div class="taskbtn">
                    <button onclick="completetask(this)" class="edit"> Mark as Complete</button>
                    
                </div>
            </div>
           </div>
        </div>`
        cont.appendChild(task);
            
        }
    }else{
        console.log("abc");
    }
}
retDataf();

function showHide(){
    if (taskmenu == false){
        taskmenu1.style.transform = "translateY(0%)";
        taskmenu = true;
        taskbtn1.innerHTML = "Close"
        tasklistdiv.style.transform = "translateY(0%)"
    }else{
        taskmenu1.style.transform = "translateY(-100%)";
        taskbtn1.innerHTML = "Add New Task"
        tasklistdiv.style.transform = "translateY(-100%)"
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
            `<div id="parentremove"><div id="tasklist" class="list-wrapper">
            <div class="list-wrapper"><div><h4 id="complete">${title.value}</h4>
                    <ul class="d-flex flex-column-reverse todo-list">
                        <li> ${description.value} </li>
                    </ul>
                    <p>${date.value} </p>
                </div>
                <div class="taskbtn">
                    <button onclick="completetask(this)" class="edit"> Mark as Complete</button>
                </div>
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
    let comp = document.querySelector('.edit');
    let completetask = e.parentElement.parentElement.firstChild.firstChild;
    completetask.style.textDecoration = "line-through";
    completetask.style.color = "gray";
    comp.innerHTML = "Completed";

}
function clearAll(){
    let tasks = document.getElementById('tasks');
    tasks.innerHTML = "";
    localStorage.clear();
}
