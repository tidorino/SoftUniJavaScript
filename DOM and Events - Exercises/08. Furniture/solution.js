function solve() {
    const generateBtn = document.getElementsByTagName('button')[0];
    const buyBtn = document.getElementsByTagName('button')[1];
    const input = document.getElementsByTagName('textarea')[0];
    const output = document.getElementsByTagName('textarea')[1];
    const tbody = document.getElementsByTagName('tbody')[0];

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate() {
        const furniture = JSON.parse(input.value);
        for (let item of furniture) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><img src="${item.img}"></td>
                <td><p>${item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td><p>${item.decFactor}</p></td>
                <td><input type="checkbox"/></td>
            `;
            tbody.appendChild(tr);
        }
    }

    function buy() {
        const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
        const furniture = Array.from(document.querySelectorAll('tbody tr'));
        const bought = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                const item = furniture[i];
                const name = item.children[1].textContent;
                const price = Number(item.children[2].textContent);
                const decFactor = Number(item.children[3].textContent);
                bought.push(name);
                totalPrice += price;
                totalDecFactor += decFactor;
            }
        }
        output.value = `Bought furniture: ${bought.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDecFactor / bought.length}`;
    }
}
// ******************


  //TODO...
//   const button = document.querySelector('#exercise button');
//   button.addEventListener('click', parseFurnitureInput);
// }

// function buySelectedFurniture() {
//   const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
//   const result = checkboxes.map(mapCheckboxToObject).reduce((acc, curr) => {
//       acc.names.push(curr.name);
//       acc.total += curr.price;
//       acc.decFactor += curr.decFactor;
//       return acc;
//   }, { 
//       names: [],
//       total: 0,
//       decFactor: 0 
//   });

//   const resultTextbox = document.querySelector('#result');
//   resultTextbox.value = `Bought furniture: ${result.names.join(', ')}\n`;
//   resultTextbox.value += `Total price: ${result.total.toFixed(2)}\n`;
//   resultTextbox.value += `Average decoration factor: ${result.decFactor / result.names.length}`;
// }

// function mapCheckboxToObject(checkbox) {
//   const row = checkbox.parentElement.parentElement;
//   const name = row.querySelector('td:nth-child(2)').innerText;
//   const price = Number(row.querySelector('td:nth-child(3)').innerText);
//   const decFactor = row.querySelector('td:nth-child(4)').innerText;

//   return { name, price, decFactor };
// }

// function parseFurnitureInput() {
//   const input = JSON.parse(document.querySelector('#exercise textarea').value);
//   const tablebody = document.querySelector('tbody');

//   input.map((furniture) => {
//     const row = document.createElement('tr');
//     const imageCell = document.createElement('td');
//     const image = document.createElement('img');
//     image.src = furniture.img;
//     imageCell.appendChild(image);

//     const nameCell = document.createElement('td');
//     nameCell.textContent = furniture.name;

//     const priceCell = document.createElement('td');
//     priceCell.textContent = furniture.price;

//     const decorationFactorCell = document.createElement('td');
//     decorationFactorCell.textContent = furniture.decFactor;

//     const checkCell = document.createElement('td');
//     const checkBox = document.createElement('input');
//     checkBox.type = 'checkbox';
//     checkCell.appendChild(checkBox);

//     row.appendChild(imageCell);
//     row.appendChild(nameCell);
//     row.appendChild(priceCell);
//     row.appendChild(decorationFactorCell);
//     row.appendChild(checkCell);

//     return row;
    
//   }).forEach((row) => tablebody.appendChild(row));
// }

// const cellCreator = {
//   createImageCell(src) {
//     const imageCell = document.createElement('td');
//     const image = document.createElement('img');
//     image.src = src;
//     imageCell.appendChild(image);

//     return imageCell;
//   },
//   createTextCell(text) {
//     const cell = document.createElement('td');
//     cell.textContent = text;

//     return cell;
//   },
//   createCheckboxCell() {
//     const checkCell = document.createElement('td');
//     const checkBox = document.createElement('input');
//     checkBox.type = 'checkbox';
//     checkCell.appendChild(checkBox);

//     return checkCell;
//   }
// };

// function createImageCell(src) {
//   const imageCell = document.createElement('td');
//   const image = document.createElement('img');
//   image.src = src;
//   imageCell.appendChild(image);

//   return imageCell;
// }

// function createTextCell(text) {
//   const cell = document.createElement('td');
//   cell.textContent = text;

//   return cell;
// }

// function createCheckboxCell() {
//   const checkCell = document.createElement('td');
//   const checkBox = document.createElement('input');
//   checkBox.type = 'checkbox';
//   checkCell.appendChild(checkBox);

//   return checkCell;