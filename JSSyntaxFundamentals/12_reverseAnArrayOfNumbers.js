function reverseArray (n, arry) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(arry[i]);
    }
    arr.reverse();
    console.log(arr.join(' '));
}

reverseArray(4, [-1, 20, 99, 5] ); 
