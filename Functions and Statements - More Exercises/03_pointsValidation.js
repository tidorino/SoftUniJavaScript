function pointsValidation(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let points = [
        {x: x1, y: y1},
        {x: x2, y: y2},
        {x: 0, y: 0},
        {x: x1, y: y1}
    ];

    for (let i = 0; i < points.length - 1; i++) {
        let distance = Math.sqrt(Math.pow(points[i+1].x - points[i].x, 2) + Math.pow(points[i+1].y - points[i].y, 2));
        if (Number.isInteger(distance)) {
            console.log(`{${points[i].x}, ${points[i].y}} to {${points[i+1].x}, ${points[i+1].y}} is valid`);
        } else {
            console.log(`{${points[i].x}, ${points[i].y}} to {${points[i+1].x}, ${points[i+1].y}} is invalid`);
        }
    }
}
pointsValidation([3, 0, 0, 4]); // {3, 0} to {0, 4} is valid
pointsValidation([2, 1, 1, 1]); // {2, 1} to {1, 1} is invalid