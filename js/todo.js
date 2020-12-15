'use strict';
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currendtDate = new Date();
(() => document.querySelector('.date').innerHTML
    = `${days[currendtDate.getDay()]}<br>
    ${currendtDate.getMonth()}-${currendtDate.getDate()}-${currendtDate.getFullYear()}`)();

const taskInput = document.querySelector('input');

const pendingList = document.querySelector('.pending-todo > ul');
const completedList = document.querySelector('.completed-todo > ul');
const addList = (item, list) => {
    if (list === 'pending') {
        pendingList.innerHTML = pendingList.innerHTML
            + `<li><input type="checkbox"><label for="input">${item}</label></li>`
    } else {
        completedList.innerHTML = completedList.innerHTML
            + `<li><input type="checkbox" checked><label for="input">${item}</label></li>`
    }
};
const clearDisplayList = () => { pendingList.innerHTML = ''; completedList.innerHTML = '' };
const pendingMessage = () => document.querySelector('.pending-message');

const setTaskStatus = (task) => {
    (localStorage.getItem(task) === 'pending') ?
        localStorage.setItem(task, 'completed') : localStorage.setItem(task, 'pending');
    clearDisplayList();
    taskManager.getAllTasks();
};
const addEventToCompleteCheckbox = () =>
    document.querySelectorAll('.todos input')
        // document.querySelectorAll('.pending-todo > ul >li input')
        // .forEach(item => console.log(item));
        // .forEach(item => item.addEventListener('click', () => console.log(event.target.nextSibling.innerHTML)));
        .forEach(item => item.addEventListener('click', () => setTaskStatus(event.target.nextSibling.innerHTML)));


const taskManager = {
    addNewTask: () => {
        localStorage.setItem(taskInput.value, 'pending');
        clearDisplayList();
        taskManager.getAllTasks();
    },
    completeTask: (key) => {
        localStorage.removeItem(key);
        localStorage.setItem(key, 'completed');
    },
    clearAllTask: () => {
        localStorage.clear();
        clearDisplayList();
    },
    getAllTasks: () => {
        for (let i = 0; i < localStorage.length; i++) {
            // console.log(localStorage.key(i));
            addList(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
        }
        addEventToCompleteCheckbox();
    }
};

// `You have ${pendingItemNumber} pending items`;
// const completedMessage = () => document.querySelector('.completed-message').innerHTML = `Completed tasks ${allItemPerPendingItem}`;
(() => document.querySelector('.plus-button').addEventListener('click', () => taskManager.addNewTask()))();
(() => document.querySelector('.hide-button').addEventListener('click', () => taskManager.addNewTask()))();
(() => document.querySelector('.clear-all-button').addEventListener('click', () => {
    taskManager.clearAllTask();
    taskManager.getAllTasks();

}))();
(() => taskManager.getAllTasks())();

(() => console.log(pendingMessage.innerHTML))();
(() => pendingMessage.innerHTML = 'csá')();