window.onload = function () {
    const barajar = document.getElementById('barajar');
    barajar.addEventListener("click", barajarImagenes);

    const imagenes = [
        'img/bastos_10.jpg',
        'img/copas_11.jpg',
        'img/espadas_12.jpg',
        'img/oros_1.jpg',
        'img/bastos_10.jpg',
        'img/copas_11.jpg',
        'img/espadas_12.jpg',
        'img/oros_1.jpg',
    ];

    let seleccionada = null;
    let vidas = 3;

    function barajarImagenes() {
        vidas = 3; 
        document.getElementById('contadorVidas').innerText = vidas;
        document.getElementById('mensaje').innerText = '';
        
        for (let i = imagenes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imagenes[i], imagenes[j]] = [imagenes[j], imagenes[i]];
        }
        mostrarImagenes();
    }

    function mostrarImagenes() {
        const imagenContainer = document.getElementById('imagenContainer');
        imagenContainer.innerHTML = '';

        for (let i = 0; i < imagenes.length; i++) {
            const img = document.createElement('img');
            img.src = 'img/back2.jpg';
            img.dataset.index = i;
            img.addEventListener('click', function () {
                revelarImagen(img);
            });
            imagenContainer.appendChild(img);
        }
    }

    function revelarImagen(img) {
        const index = img.dataset.index;
        img.src = imagenes[index];

        if (seleccionada !== null && seleccionada !== index) {
            const previamenteSeleccionada = document.querySelector(`[data-index="${seleccionada}"]`);
            if (imagenes[seleccionada] === imagenes[index]) {
                seleccionada = null;
            } else {
                setTimeout(() => {
                    img.src = 'img/back2.jpg';
                    previamenteSeleccionada.src = 'img/back2.jpg';
                    seleccionada = null;

              
                    vidas--;
                    document.getElementById('contadorVidas').innerText = vidas;
                    if (vidas === 0) {
                        document.getElementById('mensaje').innerText = '¡Has perdido! Reiniciando el juego...';
                        setTimeout(() => {
                            barajarImagenes(); 
                        }, 1000);
                    }
                }, 300);
            }
        } else {
            seleccionada = index;
        }
    }

    barajarImagenes();
}