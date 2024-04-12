function solve() {
  //TODO...
  const text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;
    const resultSpan = document.getElementById('result');

    let result;
    if (namingConvention === 'Camel Case') {
        result = text.split(' ').map((word, index) => index !== 0 ? capitalize(word) : word.toLowerCase()).join('');
    } else if (namingConvention === 'Pascal Case') {
        result = text.split(' ').map(capitalize).join('');
    } else {
        result = 'Error!';
    }

    resultSpan.textContent = result;
}
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
