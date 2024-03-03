function printCharacters (char1, char2) {
    const firstChar = char1.charCodeAt(0);
    const secondChar = char2.charCodeAt(0);
    let start = Math.min(firstChar, secondChar);
    let end = Math.max(firstChar, secondChar);

    let result = '';
    for (let i = start +1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    console.log(result);
}
printCharacters('a', 'd');
printCharacters('#', ':');
printCharacters('C', '#');