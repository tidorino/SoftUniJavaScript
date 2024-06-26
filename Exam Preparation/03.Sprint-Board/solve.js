const tasksSections = {
    ToDo: document.querySelector('#todo-section'),
    'In Progress': document.querySelector('#in-progress-section'),
    'Code Review': document.querySelector('#code-review-section'),
     'Done': document.querySelector('#done-section')
}

const statusToNextStatus = {
    ToDo: 'In Progress',
    'In Progress': 'Code Review',
    'Code Review': 'Done',
     'Done': 'Closed',
}

const inputs = {
    title: document.querySelector('#title'),
    description: document.querySelector('#description')
}

const API_URL = 'http://localhost:3030/jsonstore/tasks/';

let tasks = {};


function attachEvents() {
    document.querySelector('#load-board-btn').addEventListener('click', loadTasks);
    document.querySelector('#create-task-btn').addEventListener('click', createTask);
}

async function loadTasks() {
    tasks = await (await fetch(API_URL)).json();
    Object.values(tasksSections).forEach((section) => {
        section.textContent = ''});

    Object.values(tasks).forEach((task) => {
        const section = tasksSections[task.status];
        const item = createElement('li', null, ['task'], null, section);
        createElement('h3', task.title, null, null, item);
        createElement('p', task.description, [], null, item);
        const button = createElement(
            'button',
            statusToNextStatus[task.status] === 'Closed'
             ? 'Close '
             : `Move to ${statusToNextStatus[task.status]}`, [],task._id, item);
        button.addEventListener('click', moveTask);  
    });  
      
   
}

async function createTask() {
    if (Object.values(inputs).some(input => input.value === '')) {
        return;
    }
  
    const task = {
        title: inputs.title.value,
        description: inputs.description.value,
        status: 'ToDo',
    }
    fetch(API_URL, {
        method: 'POST',        
        body: JSON.stringify(task),
    });

    loadTasks();
    inputs.title.value = '';
    inputs.description.value = '';
}

async function moveTask(e) {
    const task = tasks[e.currentTarget.getAttribute('id')];
    let method = 'PATCH';
    let body = JSON.stringify({
        ...task,
        status: statusToNextStatus[task.status]
    })

    if (task.status === 'Done') {
        method = 'DELETE';
        body = undefined;
    }
    await fetch(`${API_URL}/${task._id}`, {
        method, 
        body,
    });
    loadTasks();

}


function  createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type);

    if (textContent) {
        element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id) {
        element.setAttribute('id', id);
    }

    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

attachEvents();