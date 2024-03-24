function employees(input) {
    let employees = {};

    for (let employee of input) {
        employees[employee] = employee.length;
    }

    for (let key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);  // Should return: