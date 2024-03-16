function printElFromArray(arr, number) {
    const resultArray = [];
    const length = arr.length;

    for (let i = 0; i < length; i += number) {

        resultArray.push(arr[i]);
    }
    return resultArray;    
}

printElFromArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);