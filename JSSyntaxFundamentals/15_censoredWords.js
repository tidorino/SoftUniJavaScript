function censoredWords (text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));

    }
    console.log(text);
}

censoredWords('Find the hidden word', 'hidden'); // A ***** sentence with some words