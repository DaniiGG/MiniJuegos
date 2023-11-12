window.onload = () => {
    const palabrasAdivinar = ["memoria", "lugar", "programa", "manzana", "mesa"];
    let palabraActualIndex = Math.floor(Math.random() * palabrasAdivinar.length);
    let palabraOculta = "X".repeat(palabrasAdivinar[palabraActualIndex].length);
    
    let palabraAdivinar = palabrasAdivinar[palabraActualIndex];

    let intentosRestantes = 10;
    const letrasIncorrectas = [];

    const displayPalabra = document.getElementById("palabra");
    const letterButtonsContainer = document.getElementById("letras");
    const displayLetrasIncorrectas = document.getElementById("error");
    const displayIntentos = document.getElementById("intentos");
    
    const playAgainButton = document.getElementById("restart");

    function actualizarPalabra() {
        displayPalabra.textContent = palabraOculta;
    }

    function adivinarLetra(letra) {
        let letraAdivinada = false;
        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (palabraAdivinar[i] === letra) {
                palabraOculta = palabraOculta.substr(0, i) + letra + palabraOculta.substr(i + 1);
                letraAdivinada = true;
            }
        }

        if (!letraAdivinada) {
            letrasIncorrectas.push(letra);
            displayLetrasIncorrectas.textContent = letrasIncorrectas.join(", ");
            intentosRestantes--;
        }

        actualizarPalabra();

        if (palabraOculta === palabraAdivinar) {
            displayPalabra.textContent = "Has ganado! La palabra es: " + palabraAdivinar;
            deshabilitarBotones();

        } else if (intentosRestantes === 0) {
            displayPalabra.textContent = "Has perdido! La palabra es: " + palabraAdivinar;
            deshabilitarBotones(); 
        }
    }

    function deshabilitarBotones() {
        for (let i = 0; i < letterButtonsContainer.children.length; i++) {
            const letterButton = letterButtonsContainer.children[i];
            letterButton.disabled = true; 
            
        }
    }

    function reiniciar() {
        palabraActualIndex = Math.floor(Math.random() * palabrasAdivinar.length);
        palabraAdivinar = palabrasAdivinar[palabraActualIndex];
        palabraOculta = "X".repeat(palabraAdivinar.length);
        
        letrasIncorrectas.length = 0;
        displayLetrasIncorrectas.textContent = "";
        displayIntentos.textContent = intentosRestantes;
        deshabilitarBotones();
    
        for (let i = 0; i < 26; i++) {
            const letterButton = letterButtonsContainer.children[i];
            letterButton.disabled = false;
            
        }
    
        actualizarPalabra();
    }

    function actualizarPalabra() {
        displayPalabra.textContent = palabraOculta;
    }

    playAgainButton.addEventListener("click", reiniciar);

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i);

        const letterButton = document.createElement("button");
        letterButton.classList.add("oculto");
        letterButton.textContent = letter;
        letterButton.addEventListener("click", function() {
            adivinarLetra(letter);
            this.disabled = true; 
            letterButton.style.backgroundColor='transparent';
            letterButton.style.border='transparent';
            letterButton.style.color='transparent';
            displayIntentos.textContent = intentosRestantes;
        });
        letterButtonsContainer.appendChild(letterButton);
    }

    actualizarPalabra();
}