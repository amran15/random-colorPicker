const button = document.querySelector('button');

button.addEventListener('click', function() {
    document.body.style.backgroundColor = 'olive';
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
})