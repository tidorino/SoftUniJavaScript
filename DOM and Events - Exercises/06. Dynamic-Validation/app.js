function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', validateEmail);

    function validateEmail() {
        let email = input.value;
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (pattern.test(email)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}