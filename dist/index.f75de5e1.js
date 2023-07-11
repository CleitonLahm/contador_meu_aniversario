const dataDoAniver = new Date("Sep 04, 2023, 00:00:00");
const timeStampDoAniver = dataDoAniver.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOAniver = timeStampDoAniver - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const MinutoEmMs = 60000;
    const diasAteOAniver = Math.floor(distanciaAteOAniver / diaEmMs);
    const horasAteOAniver = Math.floor(distanciaAteOAniver % diaEmMs / horaEmMs);
    const minutosAteOAniver = Math.floor(distanciaAteOAniver % horaEmMs / MinutoEmMs);
    const segundosAteOAniver = Math.floor(distanciaAteOAniver % MinutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOAniver}d ${horasAteOAniver}h ${minutosAteOAniver}m ${segundosAteOAniver}s`;
    if (distanciaAteOAniver < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Feliz Anivers\xe1rio";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
