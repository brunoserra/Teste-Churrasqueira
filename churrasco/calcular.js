//coletando inputs
let homem = document.getElementById('#qtdHomem').value;
let mulher = document.getElementById('#qtdMulher').value;
let crianca = document.getElementById('#qtdCrianca').value;
let res = document.getElementById('#resultado').value;




function caclular() {
    //soma das pessoas

    let totalPessoas = Number(homem) + Number(mulher) + Number(crianca),

}
document.getElementById("total-pessoas").innerHTML = `${totalPessoas} pessoas`