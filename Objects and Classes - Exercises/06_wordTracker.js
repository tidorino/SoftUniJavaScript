function wordsTracker(word, wordsTocheck) {
    consolejson.log(word);
    console.log(wordsTocheck);
    let wordsCount = {};
    let wordsArr = word.split(' ');

    for (let word of wordsTocheck) {
        wordsCount[word] = 0;
    }

    for (let word of wordsArr) {
        if (wordsCount.hasOwnProperty(word)) {
            wordsCount[word]++;
        }
    }

    let sorted = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    )