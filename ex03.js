function calcularTotal() {
    // Limpa o resultado anterior
    document.getElementById("totalVenda").innerText = "";

    // Obtem os valores inseridos pelo usuário
    const vp1 = parseFloat(document.getElementById("valorProduto1").value);
    const qtp1 = parseFloat(document.getElementById("quantidadeProduto1").value);
    const nomeP1 = document.getElementById("nomeProduto1".value);
    
    const vp2 = parseFloat(document.getElementById("valorProduto2").value);
    const qtp2 = parseFloat(document.getElementById("quantidadeProduto2").value);
    const nomeP2 = document.getElementById("nomeProduto1".value);

    const vp3 = parseFloat(document.getElementById("valorProduto3").value);
    const qtp3 = parseFloat(document.getElementById("quantidadeProduto3").value);
    const nomeP3 = document.getElementById("nomeProduto1".value);
    // Calcula o total da venda
    const totalVenda = (vp1 * qtp1) + (vp2 * qtp2) + (vp3 * qtp3);

    // Exibe o resultado na página
    document.getElementById("totalVenda").innerText = `O total da venda é R$ ${totalVenda.toFixed(2)}`;
}