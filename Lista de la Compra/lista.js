window.onload = function () {
    const listaElementos = document.getElementById('elementos');
    const inputNuevoElemento = document.getElementById('nuevoElemento');
    const botonAgregarElemento = document.getElementById('agregarElemento');
    
    botonAgregarElemento.addEventListener('click', hacerLista);
    
    inputNuevoElemento.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            hacerLista();
        }
    });
    
    function hacerLista() {
        const nuevoElementoTexto = inputNuevoElemento.value;
        if (nuevoElementoTexto.trim() !== '') {
            const nuevoElemento = document.createElement('li');
            const editar = document.createElement('button');
            const borrar = document.createElement('button');
            const inputEditar = document.createElement('input'); 
            const agregar = document.createElement('button');
            
            nuevoElemento.textContent = nuevoElementoTexto;
            editar.innerHTML = "<img src='img/1250614.png'>";
            borrar.innerHTML = "<img src='img/1017530.png'>";
            inputEditar.type = "text"; 
            agregar.textContent = "Confirmar";
            inputEditar.value = nuevoElementoTexto; 
            
            listaElementos.appendChild(nuevoElemento);
            listaElementos.appendChild(editar);
            listaElementos.appendChild(borrar);
            
            inputNuevoElemento.value = '';

            editar.addEventListener('click', function() {
                nuevoElemento.style.display = "none"; 
                listaElementos.removeChild(editar);
                listaElementos.removeChild(borrar);
                listaElementos.appendChild(inputEditar);
                inputEditar.style.width="97.6%";
                listaElementos.appendChild(agregar);
                agregar.style.backgroundColor= "#4285f4";
                
                
                agregar.addEventListener('click', function() {
                    nuevoElemento.textContent = inputEditar.value; 
                    nuevoElemento.style.display = "block";
                    listaElementos.removeChild(inputEditar);
                    listaElementos.removeChild(agregar);
                    listaElementos.appendChild(editar);
                    listaElementos.appendChild(borrar);
                });
            });

            borrar.addEventListener('click', function() {
                listaElementos.removeChild(nuevoElemento);
                listaElementos.removeChild(editar);
                listaElementos.removeChild(borrar);
                listaElementos.removeChild(inputEditar); 
            });
        }
    }
}