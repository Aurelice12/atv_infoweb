let contadorLinhas = 0;

document.getElementById('btnAdicionar').addEventListener('click', function() {
    const inputTexto = document.getElementById('inputTexto');
    const texto = inputTexto.value.trim();

    if (texto) {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = texto;
        document.getElementById('paragrafos').appendChild(novoParagrafo);
        contadorLinhas++;
        inputTexto.value = '';
    } else {
        alert('Por favor, digite um parágrafo.');
    }
});

document.getElementById('btnContar').addEventListener('click', function() {
    alert(`${contadorLinhas} linha(s) foram adicionadas.`);
});