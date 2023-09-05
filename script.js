


const soma = document.getElementById("soma")
const subtrair = document.getElementById("subtrair")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")


soma.addEventListener("click", somar)
subtrair.addEventListener("click", subtr)
multiplicar.addEventListener("click", multi)
dividir.addEventListener("click", divi)

function somar(){
    var valor1 = document.getElementById("n1").value
    var valor2 = document.getElementById("n2").value
    var respostaC = Number(valor1) + Number(valor2)
    resposta.innerText = respostaC
}

function subtr(){
    var valor1 = document.getElementById("n1").value
    var valor2 = document.getElementById("n2").value
    var respostaC = Number(valor1) - Number(valor2)
    resposta.innerText = respostaC
}
function multi(){
    var valor1 = document.getElementById("n1").value
    var valor2 = document.getElementById("n2").value
    var respostaC = Number(valor1) * Number(valor2)
    resposta.innerText = respostaC
}
function divi(){
    var valor1 = document.getElementById("n1").value
    var valor2 = document.getElementById("n2").value
    var respostaC = Number(valor1) / Number(valor2)
    resposta.innerText = respostaC
}
