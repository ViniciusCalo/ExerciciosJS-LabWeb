function calcularGasto() {
    // Limpa o resultado anterior
    document.getElementById("gastoCombustivel").innerText = "";

    // Obtem os valores inseridos pelo usuário
    const quilometragemPercorrida = parseFloat(document.getElementById("quilometragem").value);
    const valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value);

    // Calcula o gasto de combustível
    const gastoCombustivel = (quilometragemPercorrida / 8 )* valorCombustivel;

    // Exibe o resultado na página
    document.getElementById("gastoCombustivel").innerText = `O gasto com combustível foi de R$ ${gastoCombustivel.toFixed(2)}`;
}