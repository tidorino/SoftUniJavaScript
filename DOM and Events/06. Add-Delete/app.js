function addItem() {
    const value = document.querySelector('#newItemText').value;
    const item = document.createElement('li');
    item.textContent = value;

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';    
    deleteLink.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });
    
    item.appendChild(deleteLink);
    document.querySelector('ul').appendChild(item);
}