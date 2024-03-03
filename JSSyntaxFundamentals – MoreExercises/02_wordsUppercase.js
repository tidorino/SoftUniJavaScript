function wordsUppercase(text) {
    const splitText = text.toUpperCase()
    .split(/[\W]+/)
    .filter(w => w !== '')
    .join(', ');

    console.log(splitText);
}

wordsUppercase('Hi, how are you?'); // Hi, how are you?
wordsUppercase('hello'); // HELLO