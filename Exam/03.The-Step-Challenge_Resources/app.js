const inputSelectors = {
    name: document.querySelector('#p-name'),
    steps: document.querySelector('#steps'),
    calories: document.querySelector('#calories'),
};
const selectors = {
    addRecordButton: document.querySelector('#add-record'),
    editRecordButton: document.querySelector('#edit-record'),
    loadRecordButton: document.querySelector('#load-records'),
    listSection: document.querySelector('#list'),
    recordSection: document.querySelector('#records'),
};

const API_URL = 'http://localhost:3030/jsonstore/records/';
let editId = null;
let records = {};

selectors.addRecordButton.addEventListener('click', addRecord);
selectors.editRecordButton.addEventListener('click', editRecord);
selectors.loadRecordButton.addEventListener('click', loadRecords);

async function loadRecords() {   
    records = await (await fetch(API_URL)).json();
    selectors.listSection.innerHTML = '';
    Object.values(selectors.recordSection).forEach((section) => {
        section.textContent = ''
    });
      
    Object.values(records).forEach((record) => {
        const section = selectors.listSection;
        const item = createElement('li', null, ['record'], null, section);
        const div = createElement('div', null, ['info'], null, item);
        createElement('p', record.name, null, null, div);
        createElement('p', record.steps, null, null, div);
        createElement('p', record.calories, null, null, div);
        const buttons = createElement('button', null, ['btn-wrapper'], null, item);
        const editButton = createElement('button', 'Change', ['change-btn'], null, buttons);
        editButton.addEventListener('click', loadRecordForEdit);
        const deleteButton = createElement('button', 'Delete', ['delete-btn'], null, buttons);
        deleteButton.addEventListener('click', deleteRecord);

    });
}

async function addRecord() {
    if (Object.values(inputSelectors).some(input => input.value === '')) {
        return;
    }

    const record = {
        name: inputSelectors.name.value,
        steps: inputSelectors.steps.value,
        calories: inputSelectors.calories.value,
    };
    await fetch(`${API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
    });
    clearInputs();
    await loadRecords();
}

async function editRecord() {
    if (Object.values(inputSelectors).some(input => input.value === '')) {
        return;
    }

    const record = {
        name: inputSelectors.name.value,
        steps: inputSelectors.steps.value,
        calories: inputSelectors.calories.value,
    };
    await fetch(`${API_URL}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
    });
    clearInputs();
    selectors.addRecordButton.disabled = false;
    selectors.editRecordButton.disabled = true;
    editId = null;
    
 
    await loadRecords();
}


function createRecordElement(record) {
    if (Object.values(inputSelectors).some(input => input.value === '')) {
        return;
    }

    const li = document.createElement('li');
    li.textContent = record.name, record.steps, record.calories;
    const editButton = document.createElement('button');
    editButton.textContent = 'Change';
    editButton.addEventListener('click', loadRecordForEdit);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteRecord);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    selectors.listSection.appendChild(li);
}

async function loadRecordForEdit(e) {
    const record = records[e.currentTarget.parentNode.parentNode._id];
    // inputSelectors.name.value = record.name;
    // inputSelectors.steps.value = record.steps;
    // inputSelectors.calories.value = record.calories;
    selectors.addRecordButton.disabled = true;
    selectors.editRecordButton.disabled = false;
    editId = record._id;
    
    await fetch(`${API_URL}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
    });
    
}

async function deleteRecord(e) {
    const record = records[e.currentTarget.getAttribute('id')];
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        body: undefined,
    });
    await loadRecords();
}

function clearInputs() {
    inputSelectors.name.value = '';
    inputSelectors.steps.value = '';
    inputSelectors.calories.value = '';
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


