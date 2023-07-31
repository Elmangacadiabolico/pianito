const button = document.getElementById('brillar-btn');

button.addEventListener('click', () => {
    button.classList.add('brillar');
    
    // Eliminar la clase de brillo después de 500ms para volver al estado original
    setTimeout(() => {
        button.classList.remove('brillar');
    }, 500);
});