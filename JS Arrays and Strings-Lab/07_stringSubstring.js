function stringSubstring(word, text) {
    const words = text.split(' ');
    let found = false
    for (let w of words) {
        if (w.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            found = true
            break
        }     
    }
    if (!found) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript', 'JavaScript is the best programming language') // JavaScript
stringSubstring('python', 'JavaScript is the best programming language') // python not found!