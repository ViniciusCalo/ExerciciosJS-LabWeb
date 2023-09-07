function calcularPesoIdeal() {
    // Limpa o resultado anterior
    document.getElementById("pesoIdeal").innerText = "";

    // Obtem os valores inseridos pelo usuário
    const altura = parseFloat(document.getElementById("altura").value);
    const sexo = document.getElementById("sexo").value;

    let pesoIdeal;

    if (sexo === "homem") {
        pesoIdeal = (72.7 * altura) - 58;
        document.getElementById("pesoIdeal").innerText = `Seu peso ideal é de ${pesoIdeal.toFixed(2)} kg.`;
    } else if (sexo === "mulher") {
        pesoIdeal = (62.1 * altura) - 44.7;
        document.getElementById("pesoIdeal").innerText = `Seu peso ideal é de ${pesoIdeal.toFixed(2)} kg.`;
    } else {
        alert("Por favor, selecione o sexo.");
    }
}