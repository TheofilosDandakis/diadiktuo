// Κώδικας που θα εκτελείται όταν φορτωθεί η σελίδα:
// Code that will run when the page is loaded:
//
// Γράψτε εδώ τον κώδικά σας
// Write your code here
//
function initialize(){
    getTotalCount();
    getDoneCount();
    colorEveryOddTask();
    addEventListener("keypress",function(event){
        if (event.key == "Enter") {
            createInput();
            getTotalCount();
            getDoneCount();
            colorEveryOddTask();
        }
    })
}
//--------------------------------------------------
// Ο παραπάνω κώδικας θα κάνει χρήση των εξής συναρτήσεων:
// The above code will use the following functions:

// 1. Επιστρέφει το πλήθος των εργασιών που έχουν σημειωθεί ως ολοκληρωμένες
// 1. Returns the count of the tasks that have been marked as done
function getDoneCount() {
    const tasks = document.querySelectorAll('.done');
    const totalTasks = getTotalCount();
    const doneCount = tasks.length;
    const leftTasks = totalTasks - doneCount;
    document.querySelector('.left-todo').textContent = leftTasks;
}

// 2. Επιστρέφει το πλήθος όλων των εργασιών
// 2. Returns the total count of all the tasks
function getTotalCount() {
    const tasks = document.querySelectorAll('.task-list li');
    const totalCount = tasks.length;
    document.querySelector('.total').textContent = totalCount;
    return totalCount;
}

// 3. Χρωματίζει όλες τις άρτιες εργασίες
// 3. Colors every odd task
function colorEveryOddTask() {
    const taskSpans = document.querySelectorAll('.task-list li span');
    taskSpans.forEach(function(span, index) {
        if (index % 2 === 1) {
            span.style.backgroundColor = 'lightgrey'; // Change this to the desired color
        }
    });
}

function createInput(){
    let inputVal = document.getElementById("item").value;
    var add = document.querySelector(".task-list");
    var createElement = document.createElement("li");
    createElement.innerHTML = "<span>"+inputVal+"</span><button onclick='markAsDone(this)'>Αφαίρεση</button>";
    add.appendChild(createElement);
}

function markAsDone(button) {
    button.parentNode.classList.add("done");
}