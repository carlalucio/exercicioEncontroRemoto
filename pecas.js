let listaPecas = ["Motor", "Disco de freio", "Filtro de Ar"]

if (listaPecas.length < 10) {
    console.log("É possível cadastrar mais peças")
    
} else {
    console.log("Não é possível cadastrar mais peças.")
}

 let peso = 50

 if (peso > 100) {
    console.log("A peça possui peso adequado.")
    
} else {
    console.log("A peça deve pesar no  mínimo 100gr.")
}

let nomePeca = "Disco de Freio"

if (nomePeca.length == 0 || nomePeca.length < 3  ) {
    console.log ("O nome da peça precisa ter ao menos 3 caracteres. ")
}
else {
    console.log ("Nome da peça adequado para cadrastro")
}