function exibirNumerosPares() {
    // Limpa o resultado anterior
    document.getElementById("numerosPares").innerText = "";
    document.getElementById("somaTotal").innerText = "";

    // Obtém o valor máximo informado pelo usuário
    const valorMaximo = parseInt(document.getElementById("valorMaximo").value);

    // Variável para armazenar a soma
    let soma = 0;

    // Loop para encontrar e exibir números pares
    for (let i = 2; i <= valorMaximo; i += 2) {
        document.getElementById("numerosPares").innerText += i + " -  ";
        soma += i;
    }

    // Exibe a soma total
    document.getElementById("somaTotal").innerText = soma;
}