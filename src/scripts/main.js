const dataDoAniver = new Date('Sep 04, 2023, 00:00:00');
const timeStampDoAniver = dataDoAniver.getTime();

const contaAsHoras = setInterval( function() {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOAniver = timeStampDoAniver - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 *24;
  const horaEmMs = 1000 * 60 * 60;
  const MinutoEmMs = 1000 * 60;

  const diasAteOAniver = Math.floor(distanciaAteOAniver / diaEmMs);
  const horasAteOAniver = Math.floor((distanciaAteOAniver % diaEmMs) / horaEmMs);
  const minutosAteOAniver = Math.floor((distanciaAteOAniver % horaEmMs) / MinutoEmMs);
  const segundosAteOAniver = Math.floor((distanciaAteOAniver % MinutoEmMs) / 1000)

  document.getElementById('contador').innerHTML = `${diasAteOAniver}d ${horasAteOAniver}h ${minutosAteOAniver}m ${segundosAteOAniver}s`

  if (distanciaAteOAniver < 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'Feliz Aniversário'
  }
}, 1000)