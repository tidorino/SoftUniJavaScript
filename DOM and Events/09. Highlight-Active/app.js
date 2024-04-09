function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
        });
    });
}