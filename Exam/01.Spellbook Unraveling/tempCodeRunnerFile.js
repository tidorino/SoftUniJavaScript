function spellbookUnraveling(input) {
    let spell = input.shift();
    const commands = input.splice(spell);
    console.log(spell);
    console.log(commands);

    for (let command of commands) {
        if (command === 'RemoveEven') {
            spell = removeEvenIndices(spell);
            console.log(spell);
        } else if (command.includes('TakePart')) {
            const [_, fromIndex, toIndex] = command.split('!');
            spell = takePartOfSpell(spell, fromIndex, toIndex);
            console.log(spell);
        } else if (command.includes('Reverse')) {
            const [_, substring] = command.split('!');
            spell = reverseSubstring(spell, substring);
            console.log(spell);
        } else if (command === 'End') {
            console.log(`The concealed spell is: ${spell}`);
            break;
        }  
    }

    function removeEvenIndices(spell) {
        let newSpell = '';
        for (let i = 0; i < spell.length; i++) {
            if (i % 2 === 0) {
                newSpell += spell[i];
                console.log(i);
                console.log(newSpell);

            }
        }
        return newSpell;
    }

    function takePartOfSpell(spell, fromIndex, toIndex) {
        let newSpell = '';
        for (let i = 0; i < spell.length; i++) {
            if (i >= fromIndex && i < toIndex) {
                newSpell += spell[i];
            }
        }
        return newSpell;
    }

    function reverseSubstring(spell, substring) {
        if (!spell.includes(substring)) {
            console.log('Error');
            return spell;
        }
        let reversedSubstring = substring.split('').reverse().join('');
        let newSpell = spell.replace(substring, reversedSubstring);
        return newSpell;
    }
        
}   