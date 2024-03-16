function listOfNames(names) {
    const sortedNames = names.sort()
    for (let i = 0; i < sortedNames.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`)
    }   
    
}
listOfNames(["John", "Bob", "Christina", "Ema"]) // Bob Christina Ema John