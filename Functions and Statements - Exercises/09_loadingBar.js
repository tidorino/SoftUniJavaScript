function loadingBar(number) {
    let result = '';
    let percentage = number / 10;
    let dots = 10 - percentage;
    if (number === 100) {
        result = '100% Complete!\n[%%%%%%%%%%]';
    } else {
        result = `${number}% [${'%'.repeat(percentage)}${'.'.repeat(dots)}]\nStill loading...`;
    }
    console.log(result);
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
