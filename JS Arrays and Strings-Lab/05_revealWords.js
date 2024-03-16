function revealWords(words, text) {
    words = words.split(', ');
    words.forEach(word => {
        let replaced = '*'.repeat(word.length);
        text = text.replace(replaced, word);
    });
    console.log(text);
}
revealWords('great',
'softuni is ***** place for learning new programming languages')