function extractText() {
    const listItems = Array.from(document.querySelectorAll('li'));
    
    const text = listItems.map(x => x.textContent).join('\n');
    document.querySelector('textarea').value = text;
    
}