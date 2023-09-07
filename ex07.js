const valores = []; // Vetor para armazenar os valores

function adicionarValor() {
    const valor = parseFloat(document.getElementById("valorInput").value);
    if (!isNaN(valor)) {
        valores.push(valor);
        document.getElementById("valorInput").value = "";
    }
}

function mostrarValores() {
    document.getElementById("valoresInseridos").innerText = valores.join(", ");
}

function encontrarMaiorMenor() {
    if (valores.length === 0) {
        alert("Nenhum valor inserido.");
        return;
    }

    const maior = Math.max(...valores);
    const menor = Math.min(...valores);

    document.getElementById("maiorValor").innerText = `Maior Valor: ${maior}`;
    document.getElementById("menorValor").innerText = `Menor Valor: ${menor}`;
}