// const div = document.getElementById("quadrado")

// div.addEventListener('mouseenter', azul)
// div.addEventListener('mouseout', mudarCor)
// div.addEventListener('mousedown', Clicou)
// div.addEventListener('mouseup', soltou)

// function mudarCor(){
//         div.style.backgroundColor = 'purple'
//  }
// function azul(){
//         div.style.backgroundColor = 'blue'
            
// }
// function Clicou(){
//         div.innerHTML =` 
//              <ul>
//                 <li> item1 </li>    
//                 <li> item2 </li>    
//                 <li> item3 </li>    
//             </ul>
//          `
// }
//  function soltou(){
//         div.innerText=""
// }



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
