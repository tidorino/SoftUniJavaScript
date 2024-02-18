function arrayRotation(arr, numRotation) {
    for (let i = 0; i < numRotation; i++) {
        const firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);