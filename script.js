document.getElementById("calcular").addEventListener("click", function () {
    const nome1 = document.getElementById("nome1").value.trim();
    const nome2 = document.getElementById("nome2").value.trim();
    const botao = document.getElementById("calcular");

    if (nome1 === "" || nome2 === "") {
        alert("Por favor, escreve os dois nomes!");
        return;
    }

    botao.innerText = "Calculando o amor...";

    const finalPercent = (Math.random() * 100).toFixed(1);

    let frase = "";

    if (finalPercent <= 20) {
        frase = "O amor às vezes começa devagar… mas nunca se sabe.";
    } else if (finalPercent <= 40) {
        frase = "Há potencial, mas ainda falta chama.";
    } else if (finalPercent <= 60) {
        frase = "Vocês têm uma boa energia juntos!";
    } else if (finalPercent <= 80) {
        frase = "Vocês combinam muito! Só falta um passo.";
    } else {
        frase = "Almas gémeas detectadas! ❤️";
    }

    let current = 0;
    const speed = 20;

    // limpar frase antes da animação
    document.getElementById("frase").innerText = "";

    const interval = setInterval(() => {
        current += 0.5;

        if (current >= finalPercent) {
            current = finalPercent;
            clearInterval(interval);

            botao.innerText = "Calcular o amor";

            // FRASE SÓ APARECE QUANDO A ANIMAÇÃO TERMINA
            document.getElementById("frase").innerText = frase;
        }

        document.getElementById("percentagem").innerText = current.toFixed(1) + "%";
    }, speed);

    document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("calcular").click();
    }
    });
});