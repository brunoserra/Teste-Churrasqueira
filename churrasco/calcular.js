function calculo() {

    //coletando inputs
    let homem = document.getElementById(`qtdHomem`)
    let mulher = document.getElementById(`qtdMulher`)
    let crianca = document.getElementById(`qtdCrianca`)
    let cerveja = document.getElementById(`cervejas`)
    let refrigerante = document.getElementById(`refrigerantes`)
    let acpto = document.getElementById(`acompanhamento`)
    let res = document.getElementById(`res`)

    //fazendo os calculos
    if (homem.value.length == 0 || mulher.value.length == 0 || crianca.value.length == 0 || cerveja.value.length == 0 || refrigerante.value.length == 0) {
        alert(`Por favor Preencha todos os campos!`)
    } else {
        //converter inputs
        let qdtH = Number(homem.value)
        let qtdM = Number(mulher.value)
        let qtdC = Number(crianca.value)
        let qtdBeer = Number(cerveja.value)
        let qtdRefri = Number(refrigerante.value)

        //Quantidade de Pessoas
        totalPessoas = qtdH + qdtM + qtdC
            //Calculo da Carne
        totalCarne = (qtdH * 0.63) + (qtdM * 0.48) + (qtdC * 0.350)
            // Acompanhementos
        if (acpto.checked) {
            totalac = (qtdH * 0.450) + (qtM * 0.350) + (qtdC * 0.250)

        }
    }

}