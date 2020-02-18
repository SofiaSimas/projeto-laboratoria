  
// Nome do usuario
const name = prompt  ("Qual seu nome?")

// imprimir na tela
const nome = document.getElementById ("nome")
            nome.innerHTML = "Olá " + name + "."

// Solicitar se deseja responder a prova
const alternative = prompt ("Olá " + name + "! \nVocê deseja responder nossa prova online? Responda: Sim ou Não")

// Resposta não
if (alternative == "Não") {
   document.write ("Obrigada por nos visitar!")
} 

//Resposta sim - PROVA
if (alternative == "Sim") {
    const questionOne = prompt ("Qual o resultado de 2 + 2? \n A - 4 \nB - 8 ")
        if (questionOne == "A") {
           const corretaUm = document.getElementById ("corretaUm")
            corretaUm.innerHTML = "Pergunta 1"
        } else if (questionOne == "B") {
            const erradaUm = document.getElementById ("erradaUm")
            erradaUm.innerHTML = "Pergunta 1"
        }
    const questionTwo = prompt ("Qual o resultado da subtração 20 - 5? \nA - 25 \nB - 15")
        if (questionTwo == "B") {
            const corretaDois = document.getElementById ("corretaDois")
             corretaDois.innerHTML = "Pergunta 2"
         } else if (questionTwo == "A") {
             const erradaDois = document.getElementById ("erradaDois")
             erradaDois.innerHTML = "Pergunta 2"
         }
    const questionThree = prompt ("Qual o resultado da multiplicação 3 x 3? \nA - 27 \nB - 9")
         if (questionThree == "B") {
           const corretaTres = document.getElementById ("corretaTres")
            corretaTres.innerHTML = "Pergunta 3"
        } else if (questionThree == "A") {
            const erradaTres = document.getElementById ("erradaTres")
            erradaTres.innerHTML = "Pergunta 3"
        }
}
