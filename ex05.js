function calcularCusto() {
    // Limpa o resultado anterior
    document.getElementById("custoPiso").innerText = "";

    // Obtem os valores inseridos pelo usuário
    const comprimentoComodo = parseFloat(document.getElementById("comprimento").value);
    const larguraComodo = parseFloat(document.getElementById("largura").value);

    // Define o preço por metro quadrado
    const precoPorMetroQuadrado = 36.00;

    // Calcula a área do cômodo (metros quadrados)
    const areaComodo = comprimentoComodo * larguraComodo;

    // Calcula o custo de assentamento de piso
    const custoPiso = areaComodo * precoPorMetroQuadrado;

    // Exibe o resultado na página
    document.getElementById("custoPiso").innerText = `O custo de assentamento de piso é de R$ ${custoPiso.toFixed(2)}`;
}