function printHashtags(text) {
    let words = text.split(' ');
    console.log(words);
    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            console.log(word.slice(1));
        }
    }
}
printHashtags('Nowadays everyone uses # to tag a #special word in #socialMedia') // # #special #socialMedia