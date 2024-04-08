function makeDictionary(input) {
    let dictionary = {};
    input.forEach(element => {
        let obj = JSON.parse(element);
        let tuple = Object.entries(obj);
        let key = tuple[0][0];
        let value = tuple[0][1];
        dictionary[key] = value;
    });
    let sortedKeys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }
}
makeDictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}']);