function pascaleCaseSplitter(str) {
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += ', ';
        }
        result += str[i];
    }
    console.log(result);
}
pascaleCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'); // Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
pascaleCaseSplitter('HoldTheDoor'); // Hold, The, Door