let dataAtual = new Date('2022-05-22')
let dataEvento = new Date('2022-06-22')

    if (dataEvento > dataAtual){
        console.log("Evento cadastrado com sucesso")
    }else {
        console.log("Não foi possível cadastar o evento. Data inválida")
    }
           
let idadeParticipante = 19

    if (idadeParticipante < 18){
        console.log("Não é permitido participantes menores de 18 anos")
    } else {
        console.log("Idade permitida")
    } 
    
let limiteParticipantes = 101
    
    if(limiteParticipantes > 100) {
    console.log("Número de participantes excedido")
}

let palestrante = "LUIZ"
let listaParticipantes = ["CARLA", "ANDRÉ", "ANTONIO", "CARLOS", "ALEXANDRE", "ALBERTO", "..."]

    console.log("Palestrante: " + palestrante)
    for(let nome of listaParticipantes){
        console.log(nome)
    }





    
    

