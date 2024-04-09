function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const emailBoxes = Array.from(document.querySelectorAll('td:nth-child(even)'));

    const userEmailBox = emailBoxes.find((box) => box.textContent === email)
    if (userEmailBox) {
        userEmailBox.parentElement.remove();
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }

}