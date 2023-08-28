export function tempoParaSegundo(tempo: string) {
  const [horas='0', minutos='0', segundos='0'] = 
  tempo.split(":");

  const horasEmSegundos = Number(horas) *3600
  const minutosEmSugundos = Number(minutos) *60
  const tempoEmSegundos = Number(segundos)

  return horasEmSegundos + minutosEmSugundos + tempoEmSegundos

}