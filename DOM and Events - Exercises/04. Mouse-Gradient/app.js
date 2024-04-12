function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', function (e) {
        let x = e.offsetX;
        let percent = Math.floor(x / (this.clientWidth - 1) * 100);

        result.textContent = `${percent}%`;
    });

    gradient.addEventListener('mouseout', function () {
        result.textContent = '';
    });
    
}