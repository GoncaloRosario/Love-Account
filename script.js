document.getElementById("calcular").addEventListener("click", function () {
    const nome1 = document.getElementById("nome1").value.trim();
    const nome2 = document.getElementById("nome2").value.trim();
    const botao = document.getElementById("calcular");

    if (nome1 === "" || nome2 === "") {
        alert("Please write both names!");
        return;
    }

    botao.innerText = "Calculating Love...";

    const finalPercent = (Math.random() * 100).toFixed(1);

    let frase = "";

    if (finalPercent <= 20) {
        frase = "Love sometimes starts slowly… but you never know.";
    } else if (finalPercent <= 40) {
        frase = "There's potential, but the spark is still missing.";
    } else if (finalPercent <= 60) {
        frase = "You have a good energy together!";
    } else if (finalPercent <= 80) {
        frase = "You match very well! You just need one more step.";
    } else {
        frase = "Soulmates detected! ❤️";
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

            botao.innerText = "Calculating Love";

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