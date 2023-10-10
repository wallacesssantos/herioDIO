console.log("Desafio classificador de nível de Herói \n")
console.log("O classificador é difinido nos seguintes nívels: \n")

console.log("Se XP for menor do que 1.000 = Ferro")
console.log("Se XP for entre 1.001 e 2.000 = Bronze")
console.log("Se XP for entre 2.001 e 5.000 = Prata")
console.log("Se XP for entre 6.001 e 7.000 = Ouro")
console.log("Se XP for entre 7.001 e 8.000 = Platina")
console.log("Se XP for entre 8.001 e 9.000 = Ascendente")
console.log("Se XP for entre 9.001 e 10.000= Imortal")
console.log("Se XP for maior ou igual a 10.001 = Radiante\n\n")

let heroi = "Zelda"
let ponto = 1000
let subiuDeNivel = ponto * 5

const nivel = ["FERRO", "BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTE", "IMORTAL", "RADIANTE"]

console.log("O nome do nosso destemido herói é: " + heroi)
console.log("Nas batalhas ele conseguiu conquistar mais pontos fazendo com que ele suba de nível")


if(subiuDeNivel <= 1000){
    console.log("Ele alcançou a pontuação " + subiuDeNivel + " Nosso herói chegou ao nível " + nivel[0])
    console.log("O herói de nome " + heroi + " está no nivel de " + nivel[0])
}else if(subiuDeNivel <= 2000){
    console.log("Ele alcançou a pontuação " + subiuDeNivel + " Nosso pequeno conseguiu chegar ao nível " + nivel[1])
    console.log("O herói de nome " + heroi + " está no nivel de " + nivel[1])
}else if(subiuDeNivel <= 5000){
    console.log("Ele alcançou a pontuação " + subiuDeNivel + " Incrivel ele chegou ao nível " + nivel[2])
    console.log("O herói de nome " + heroi + " está no nivel de " + nivel[2])
}else if(subiuDeNivel <= 7000){
    console.log("Ele alcançou a pontuação " + subiuDeNivel + " Subimos de nível para " + nivel[3])
    console.log("O herói de nome " + heroi + " está no nivel de " + nivel[3])
}else if(subiuDeNivel <= 8000){
    console.log("Ele alcançou a pontuação " + subiuDeNivel + " Chegamos ao nível " + nivel[4])
    console.log("O herói de nome " + heroi + " está no nivel de " + nivel[4])
}else if(subiuDeNivel <= 9000){
    console.log("Ele alcançou a pontuação " + subiuDeNivel + " Chegamos ao nível " + nivel[5])
    console.log("O herói de nome " + heroi + " está no nivel de " + nivel[5])
}else if(subiuDeNivel <= 10000){
    console.log ("Ele alcançou a pontuação " + subiuDeNivel + " Estamos no nível " + nivel[6])
    console.log("O herói de nome " + heroi + " está no nivel de " + nivel[6])
}else if(subiuDeNivel >= 10001){
    console.log("Ele alcançou a pontuação " + subiuDeNivel + " Chegamos no nosso nível maximo, nível " + nivel[7])
    console.log("O herói de nome " + heroi + " está no nivel de " + nivel[7])
}




// switch (subiuDeNivel){
//     case subiuDeNivel <= 1000:
//         console.log("O Herói de nome " + heroi + "está no nível de " + nivel[0])
//     break

//     case subiuDeNivel <= 2000:
//         console.log("O Herói de nome " + heroi + "está no nível de " + nivel[1])
//     break

//     case subiuDeNivel <= 5000:
//         console.log("O Herói de nome " + heroi + "está no nível de " + nivel[2])
//     break

//     case subiuDeNivel <= 7000:
//         console.log("O Herói de nome " + heroi + "está no nível de " + nivel[3])
//     break

//     case subiuDeNivel <= 8000:
//         console.log("O Herói de nome " + heroi + "está no nível de " + nivel[4])
//     break

//     case subiuDeNivel <= 9000:
//         console.log("O Herói de nome " + heroi + "está no nível de " + nivel[5])
//     break

//     case subiuDeNivel <= 10000:
//         console.log("O Herói de nome " + heroi + "está no nível de " + nivel[6])
//     break

//     case subiuDeNivel >= 10001:
//         console.log("O Herói de nome " + heroi + "está no nível de " + nivel[7])
//     break
// }

