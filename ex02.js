function converterTemperatura() {
    // Limpa o resultado anterior
    document.getElementById("tempConvertida").innerText = "";
    
    // Obtém o valor da temperatura inserido pelo usuário
    const temperatura = parseFloat(document.getElementById("tempInput").value);

    // Obtém a escala selecionada
    const escala = document.getElementById("tempSelect").value;

    let temperaturaConvertida;
    
    if (escala === "celsius") {
        // Converte para Celsius
        temperaturaConvertida = (temperatura - 32) / 1.8;
        document.getElementById("tempConvertida").innerText = `A temperatura em Celsius (°C) é ${temperaturaConvertida.toFixed(2)}°C`;
    } else if (escala === "fahrenheit") {
        // Converte para Fahrenheit
        temperaturaConvertida = temperatura * 1.8 + 32;
        document.getElementById("tempConvertida").innerText = `A temperatura em Fahrenheit (°F) é ${temperaturaConvertida.toFixed(2)}°F`;
    }
}