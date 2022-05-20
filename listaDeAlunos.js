/*
lista de cadastro de alunos
percorrer a lista:
    - percorrer de Zero até o número de alunos.
    - se o número for par, escreva par e o número correspondente.
    - se o número for ímpar, escreva ímpar e o número correspondente.
    - se o número for 0, escreva zero.
*/

let numeroDeAlunos = 10
//Exemplo for

for (let contador = 0; contador < numeroDeAlunos; contador++) {
     //console.log(contador) 
        if (contador == 0) {
            console.log("o núemro atual é zero.")
        }else if(contador %2 == 0){
            console.log("o número "+contador+ " é PAR ")
        }else {
            console.log(`o número ${contador} é ÍMPAR`) // exemplo de INTERPOLAÇÂO
        }    
}



 /* Exemplo Do/While
let contador = 0

do {
    if (contador == 0) {
        console.log("o núemro atual é zero.")
    }else if(contador %2 == 0){
        console.log("o número "+contador+ " é PAR ")
    }else {
        console.log(`o número ${contador} é ÍMPAR`) // exemplo de INTERPOLAÇÂO
    } 
    contador++   

} while(contador < numeroDeAlunos) */


/*Exemplo usando While

let contador = 0

while(contador < numeroDeAlunos){
    if (contador == 0) {
        console.log("o núemro atual é zero.")
    }else if(contador %2 == 0){
        console.log("o número "+contador+ " é PAR ")
    }else {
        console.log(`o número ${contador} é ÍMPAR`) // exemplo de INTERPOLAÇÂO
    }    
    contador++
}*/



/*Exemplo for/of

let nomeDeAlunos = ["Alexandre", "André", "Carla", "Marcelo"]

for (let nome of nomeDeAlunos) {
    console.log(nome)
    
} */