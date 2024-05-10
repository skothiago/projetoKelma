function fuja() {
    let botaoNao = document.getElementById("nao")
    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;
    let maxX = larguraJanela - botaoNao.offsetWidth;
    let maxY = alturaJanela - botaoNao.offsetHeight;

    let aleatorioX = Math.floor(Math.random() * maxX);
    let aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}

function parabens() {
    alert("Parabéns, você fez a escolha certa! <3")
}