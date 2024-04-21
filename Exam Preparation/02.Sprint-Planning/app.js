window.addEventListener('load', solve);

function solve() {
    const inputSelectors = {
        typeOfAnimal: document.querySelector('#type'),
        age: document.querySelector('#age'),
        gender: document.querySelector('#gender'),
    };
    const selectors = {
        adoptButton: document.querySelector('#adopt-btn'),
        adoptionInfoSection: document.querySelector('#adoption-info'),
        adoptedListSection: document.querySelector('#adopted-list'),
    };

    selectors.adoptButton.addEventListener('click', adoptAnimal);

    function adoptAnimal() {
        if (Object.values(inputSelectors).some((x) => x.value === "")) {
            return;
        }
        const animal = {
            id: `animal-${selectors.adoptionInfoSection.children.length + 1}`,
            typeOfAnimal: inputSelectors.typeOfAnimal.value,
            age: inputSelectors.age.value,
            gender: inputSelectors.gender.value,
        };

        const li = createElement('li', null, ['animal-card'], animal.id);
        createElement('p', animal.typeOfAnimal, ['animal-card-type'], null, li);
        createElement('p', animal.age, ['animal-card-age'], null, li);
        createElement('p', animal.gender, ['animal-card-gender'], null, li);
        const editButton = createElement('button', 'Edit', ['edit-btn'], null, li);
        const doneButton = createElement('button', 'Done', ['done-btn'], null, li);
        editButton.addEventListener('click', editAnimal);
        doneButton.addEventListener('click', finishAdoption);

        selectors.adoptionInfoSection.appendChild(li);

        Object.values(inputSelectors).forEach((x) => x.value = "");
    }

    function editAnimal(event) {
        const li = event.target.parentNode;
        inputSelectors.typeOfAnimal.value = li.querySelector('.animal-card-type').textContent;
        inputSelectors.age.value = li.querySelector('.animal-card-age').textContent;
        inputSelectors.gender.value = li.querySelector('.animal-card-gender').textContent;
        li.remove();
    }

    function finishAdoption(event) {
        const li = event.target.parentNode;
        li.querySelector('.edit-btn').remove();
        li.querySelector('.done-btn').remove();
        const clearButton = createElement('button', 'Clear', ['clear-btn'], null, li);
        clearButton.addEventListener('click', clearAnimal);
        selectors.adoptedListSection.appendChild(li);
    }

    function clearAnimal(event) {
        event.target.parentNode.remove();
    }

    function createElement(type, textContent, classes, id, parent) {
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
}