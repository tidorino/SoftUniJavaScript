function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let map = new Map();
    for (let word of words) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    let result = [];
    for (let [key, value] of map) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');  // java php 3
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');