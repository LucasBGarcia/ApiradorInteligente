//inicia olhando para o Norte e 0,0
function Main(tamanhoSala, orientacoes) {
    let movimentos = orientacoes[0]
    let tamanhoSalaX = tamanhoSala[0]
    let tamanhoSalaY = tamanhoSala[1]

    let coordenadasX = 0
    let coordenadasY = 0

    let posicaoFinal;
    let Localizacao = 0

    for (var i = 0; i < movimentos.length; i++) {
        if (movimentos[i] === 'D') {
            Localizacao += 1

        } else if (movimentos[i] === 'E') {
            Localizacao -= 1
        }

        if (Localizacao === 4) {
            Localizacao = 0
        } else if (Localizacao === -4) {
            Localizacao = 0
        }

        if (Localizacao === 0) {
            posicaoFinal = 'N'
            if (movimentos[i] === 'F') {
                coordenadasY > tamanhoSalaY ? coordenadasY = coordenadasY : coordenadasY += 1
            } else if (movimentos[i] === 'T') {
                coordenadasY === 0 ? coordenadasY = 0 : coordenadasY -= 1
            }
        } else if (Localizacao < 0) {
            if (Localizacao === -1) {
                posicaoFinal = 'O'
                if (movimentos[i] === 'F') {
                    coordenadasX === 0 ? coordenadasX = 0 : coordenadasX -= 1
                } else if (movimentos[i] === 'T') {
                    coordenadasX > tamanhoSalaX ? coordenadasX = coordenadasX : coordenadasX += 1
                }
            } else if (Localizacao === -2) {
                posicaoFinal = 'S'
                if (movimentos[i] === 'F') {
                    coordenadasY === 0 ? coordenadasY = 0 : coordenadasY -= 1
                } else if (movimentos[i] === 'T') {
                    coordenadasY > tamanhoSalaY ? coordenadasY = coordenadasY : coordenadasY += 1
                }
            } else if (Localizacao === -3) {
                posicaoFinal = 'L'
                if (movimentos[i] === 'F') {
                    coordenadasX > tamanhoSalaX ? coordenadasX = coordenadasX : coordenadasX += 1
                } else if (movimentos[i] === 'T') {
                    coordenadasX === 0 ? coordenadasX = 0 : coordenadasX -= 1
                }
            }

        } else if (Localizacao > 0) {
            if (Localizacao === 1) {
                posicaoFinal = 'L'
                if (movimentos[i] === 'F') {
                    coordenadasX > tamanhoSalaX ? coordenadasX = coordenadasX : coordenadasX += 1
                } else if (movimentos[i] === 'T') {
                    coordenadasX === 0 ? coordenadasX = 0 : coordenadasX -= 1
                    //coordenadasX -= 1
                }
            } else if (Localizacao === 2) {
                posicaoFinal = 'S'
                if (movimentos[i] === 'F') {
                    coordenadasY === 0 ? coordenadasY = 0 : coordenadasY -= 1
                    //coordenadasY -= 1
                } else if (movimentos[i] === 'T') {
                    coordenadasY > tamanhoSalaY ? coordenadasY = coordenadasY : coordenadasY += 1
                }
            } else if (Localizacao === 3) {
                posicaoFinal = 'O'
                if (movimentos[i] === 'F') {
                    coordenadasX === 0 ? coordenadasX = 0 : coordenadasX -= 1
                } else if (movimentos[i] === 'T') {
                    coordenadasX > tamanhoSalaX ? coordenadasX = coordenadasX : coordenadasX += 1
                }
            }
        }
    }
    console.log(posicaoFinal, coordenadasX, coordenadasY)
    return (posicaoFinal, coordenadasX, coordenadasY)
}

Main([15, 36], ['FFFFFFFFFFFFFFFFDFETTTTTTTTTTTTTTTT'])

