const botaoMonteSeuPedido = document.querySelector('.btn-monte-seu-pedido')
const botaoEscolhaPaleta = document.querySelector('.btn-monte-seu-paleta')
const arraySabores = document.getElementsByName('slide')
const recipientes = document.getElementsByClassName('sorvete_recipientes')
const selecionandoSaborMais = document.querySelector('.button-quantidade-sorvete-mais')
const selecionandoSaborMenos = document.querySelector('.button-quantidade-sorvete-menos')
const selecionandoRecipientes = document.getElementsByClassName('sorvete_recipientes')
const desapareceTela = document.querySelector('.page1')
const apareceTela2 = document.querySelector('.sorvete')
const apareceTela3 = document.querySelector('.paletas')
var sabor = [];


//criando classe de objeto sorvete
class montagem {
    constructor(sabor) {
        this.sabor = sabor
    }
}

//Recebe o valor do sabor
const trasformandoObjeto = () => {
    for (i = 0; i <= arraySabores.length; i++) {
        if (arraySabores[i].checked) {
            valor = arraySabores[i].value
            sabor.push(valor)
            return
        }
    }
    return sabor
}
var sacola = {
}
//Montando sorvete
function adicionandoValor() {
    if (sabor.length <= 3) {
        trasformandoObjeto()
        sorvete = new montagem(sabor)

    }
    var sacola = {
        sabor: sorvete,
        quantidade: "",
        recipientes: "",
        corbetura: "",
    };
    console.log(sacola);
    return sorvete
}

//quantidade removida
function removendoValor() {
    if (sabor.length > 0 && sabor.length <= 4) {
        sabor.pop()
    }
    console.log(sorvete)
}

selecionandoSaborMais.addEventListener('click', adicionandoValor)
selecionandoSaborMenos.addEventListener('click', removendoValor)
botaoMonteSeuPedido.addEventListener('click', telaSorvete)
botaoEscolhaPaleta.addEventListener('click', telaPaleta)

function telaSorvete() {
    desapareceTela.style.display = 'none'
    apareceTela2.style.display = 'block'
}

function telaPaleta() {
    desapareceTela.style.display = 'none'
    apareceTela3.style.display = 'block'
}


