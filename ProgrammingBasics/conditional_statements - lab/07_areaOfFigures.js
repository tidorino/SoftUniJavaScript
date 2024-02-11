function areaOfFigures(input) {
    let figure = input[0];

    if (figure === 'square') {
        let side = Number(input[1]);
        let ariaResult = side * side;
        console.log(ariaResult.toFixed(3));
    } else if (figure === 'rectangle') {
        let lenght = Number(input[1]);
        let width = Number(input[2]);
        let ariaResult = lenght * width;
        console.log(ariaResult.toFixed(3));
    } else if (figure === 'circle') {
        let radius = Number(input[1]);
        let ariaResult = radius * radius * Math.PI;
        console.log(ariaResult.toFixed(3));
    } else if (figure === 'triangle') {
        let sideA = Number(input[1]);
        let heightA = Number(input[2]);
        let ariaResult = (sideA * heightA) / 2;
        console.log(ariaResult.toFixed(3));
    }

}
areaOfFigures([
    "triangle",
    "4.5",
    "20"
])

