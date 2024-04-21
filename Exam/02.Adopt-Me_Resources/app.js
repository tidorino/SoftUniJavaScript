window.addEventListener("load", solve);

function solve() {
    const animals = {};
    const inputSelectors = {
        typeOfAnimal: document.querySelector("#type"),
        age: document.querySelector("#age"),
        gender: document.querySelector("#gender"),
    };
  }

  const selectors = {
    adopbtn: document.querySelector("#adopt-btn"),
    adoptedInfo: document.querySelector("#adoption-info"),
    form: document.querySelector("#adoption-form"),
    editButton: document.querySelector('#edit-btn'),
    doneButton: document.querySelector('#done-btn'),
    adoptPet: document.querySelector('#adopt-pet'),
  }

  selectors.adopbtn.addEventListener("click", AdoptAnimal);
  selectors.editButton.addEventListener("click", editAnimal);
  selectors.doneButton.addEventListener("click", doneAdopt);

  
  function AdoptAnimal() {
    if (
      Object.values(inputSelectors).some((input) => input.value === "")
    ) {
      return;
    }

    const animal = {
      id: `animal-${Object.values(animals).length + 1}`,
      type: inputSelectors.typeOfAnimal.value,
      age: inputSelectors.age.value,
      gender: inputSelectors.gender.value,
    };
    animals[animal.id] = animal;
   

    const adoptAnimalLiElement = createElement("li", null, null, null, null); 

    const article = createElement("article", null, ["adopt-pet-info"], null, null);
    createElement("p", `Pet:${animal.type}`, ["adopt-pet-info"], null, article);
    createElement("p", `Gender:${animal.gender}`, ["adopt-pet-info"], null, article);
    createElement("p", `Age:${animal.age}`, ["adopt-pet-info"], null, article);

    const button = createElement("button", "Adopt", null, null, article);
    button.addEventListener("click", onAdopt);

    selectors.adoptPet.appendChild(article);

    // selectors.adoptedInfo.appendChild(adoptAnimalLiElement);
    // adoptAnimalLiElement.appendChild(article);
  }

  function onAdopt(e) {
    const taskId = e.target.parentElement.parentElement.getAttribute('id');
    Object.keys(inputSelectors).forEach((key) => {
        const selector = inputSelectors[key];
        selector.value = tasks[taskId][key];
        selector.disabled = true;
    });
    selectors.editButton.disabled = false;
    selectors.doneButton.disabled = false;
  
  }

  function editAnimal() {}
  function doneAdopt() {}



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
  