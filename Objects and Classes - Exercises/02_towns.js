function createTowns(input) {    
    for (let line of input) {
        let [town, latitude, longitude] = line.split(' | ');
        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(obj);
    }    
}

createTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)