function catalogue(input) {
    let catalogue = {};
    input.forEach(line => {
        let [name, price] = line.split(' : ');
        let firstLetter = name[0];
        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = [];
        }
        catalogue[firstLetter].push({ name, price: Number(price) });
    });

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [letter, products] of sortedCatalogue) {
        console.log(letter);
        products.sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    }
}
catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);