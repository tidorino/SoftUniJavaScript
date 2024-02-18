function sortNumbers(arr) {
    const sortArray = arr.sort((a, b) => a -b);
    const resultArray = [];
    const length = arr.length;

    for (let i =0; i < length; i++) {
        if (i % 2 === 0 ) {
            resultArray.push(sortArray.shift());          
        } else {
            resultArray.push(sortArray.pop());      
        }
    }
    console.log(resultArray.join(' '));
    
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);