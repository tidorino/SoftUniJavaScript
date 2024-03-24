function convertToObject(jsonString) {
    const obj = JSON.parse(jsonString);
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}'); // { name: 'George', age: 40, town: 'Sofia' }