// const input = document.querySelector("input")
const input = document.getElementById('input1')
console.log(input.value);
// const btn = document.querySelector("button")
const btn = document.getElementById("bt");
const To_do = document.querySelector(".mytask")



// quicktask
const input1 = document.getElementById("quicktext");
const btn1 = document.getElementById("bt1");
const quickTo_do = document.querySelector(".quicktask");

function updateClock() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    document.getElementById('time').innerHTML = today.toLocaleString();
    setTimeout(updateClock, 1000);
}
updateClock();


//main todo

var todos = {
    todo: localStorage.getItem('todos')
};


function loadTodos() {

    To_do.innerHTML = todos.todo;
}
loadTodos();


btn.addEventListener(('click'), () => {
    console.log(input.value);
    if (input.value) {
        const newtodo = document.createElement('div');
        newtodo.className = "newTask";
        newtodo.style.overflowWrap = "word-break";


        const li = document.createElement("li");
        li.style.listStyleType = "none";
        li.style.width = "820px";
        li.className = "todolist";

        const del = document.createElement('button');
        del.innerHTML = '&#x2716';
        del.className = "erase";
        del.style.width = "20px";
        del.style.height = "20px";
        del.style.borderRadius = "30%";
        del.style.border = "none";
        del.style.marginLeft = "7px";


        const comp = document.createElement('button');
        comp.innerHTML = '&#10004';
        comp.className = "dOne";
        comp.style.width = "20px";
        comp.style.height = "20px";
        comp.style.borderRadius = "30%";
        comp.style.border = "none";

        let x = input.value.trim();
        if (x != "") {
            newtodo.innerHTML = x;
            li.appendChild(comp);
            li.appendChild(newtodo);
            li.appendChild(del);
            To_do.appendChild(li);
            localStorage.setItem('todos', To_do.innerHTML);

        }
        input.value = "";
    }
    todos.todo = localStorage.getItem('todos');
    loadTodos();
})

To_do.addEventListener(('click'), (event) => {
    console.log(event.target.classList);
    if (event.target.classList.contains("erase")) {
        console.log("yes");
        event.target.parentElement.remove();
        localStorage.setItem('todos', To_do.innerHTML);
    }
    else if (event.target.classList.contains("dOne")) {
        console.log(event.target.parentElement)
        event.target.parentElement.style.backgroundColor = 'green';
    }
})

function dele(event) {
    event.target.parentElement.remove();
    localStorage.setItem('todos', To_do.innerHTML);
}

// quick todo

var quicktodos = {
    qtodo: localStorage.getItem('quicktodos')
};


function loadTodos1() {

    quickTo_do.innerHTML = quicktodos.qtodo;
}
loadTodos1();
btn1.addEventListener(('click'), () => {


    if (input1.value) {
        console.log(input1.value);
        const newtodo = document.createElement('div');
        newtodo.className = "newTask2";
        newtodo.style.overflowWrap = "word-break";
        newtodo.style.width = "150px";

        const li = document.createElement("li");
        li.style.listStyleType = "none";
        li.style.width = "198px";
        li.className = "todolist2";
        li.style.overflowWrap = "break-word";

        const del = document.createElement('button');
        del.innerHTML = '&#x2716';
        del.className = "erase";
        del.style.width = "15px";
        del.style.height = "15px";
        del.style.borderRadius = "30%";
        del.style.border = "none";
        del.style.marginLeft = "10px";

        const comp = document.createElement('button');
        comp.innerHTML = '&#10004';
        comp.className = "dOne";
        comp.style.width = "15px";
        comp.style.height = "15px";
        comp.style.borderRadius = "30%";
        comp.style.border = "none";

        let x = input1.value.trim();
        if (x != "") {
            newtodo.innerHTML = x;
            li.appendChild(comp);
            li.appendChild(newtodo);
            li.appendChild(del);
            quickTo_do.appendChild(li);
            localStorage.setItem('quicktodos', quickTo_do.innerHTML);

        
        }
      input1.value = "";
    }
    quicktodos.qtodo = localStorage.getItem('quicktodos');
    loadTodos1();
    console.log(quickTo_do);
})

quickTo_do.addEventListener(('click'), (event) => {
    console.log(event.target.classList);
    if (event.target.classList.contains("erase")) {
        console.log("yes");
        event.target.parentElement.remove();
        localStorage.setItem('quicktodos', quickTo_do.innerHTML);
    }
    else if (event.target.classList.contains("dOne")) {
        console.log(event.target.parentElement)
        event.target.parentElement.style.backgroundColor = 'green';
    }

})

function dele(event) {
    event.target.parentElement.remove();
    localStorage.setItem('quicktodos', quickTo_do.innerHTML);
}