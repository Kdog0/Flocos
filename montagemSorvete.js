const arraySabores = document.getElementsByName('slide')
const selecionandoSaborMais = document.querySelectorAll('.button-quantidade-sorvete-mais')
const selecionandoSaborMenos = document.querySelectorAll('.button-quantidade-sorvete-menos')
const exibidorQuantitativo = document.querySelector('.exibidor-quantitativo')

var sabor = []

class Pedido {
    sabores
    cobertura
    recipiente
}

const sorvete = new Pedido()

selecionandoSaborMais.forEach(botao =>{
    botao.addEventListener((evento)=>{
        console.log(evento.target)
    })
})

selecionandoSaborMenos.forEach(botao =>{
    // botao.addEventListener((evento)=>)
})

exibidorQuantitativo

function adicionaValorAoArray(){
    for(i=0; i<= arraySabores.length; i++){
        if(arraySabores[i].checked){
            valor = arraySabores[i].value 
            sabor.push(valor)
            return
        }
    }return
}

function adicionaValor() {
    if (sabor.length <= 3) {
        adicionaValorAoArray()
        sorvete.sabores = sabor
        
        console.log(sorvete)
    }
        return
}

function removeValor(){

    if (sabor.length >= 0 && sabor.length <= 4) {
        sabor.pop()
        
    }
    console.log(sorvete)

}

function adcionarCorbertura(){
    for(i=0; i<corbeturas.length; i++){
        if(corbeturas[i].checked){
            produtosorvete.corbetura = corbeturas[i].value
        }
    }return
}

function adcionaRecipiente() {
    for (i = 0; i < recipientes.length; i++) {
        if (recipientes[i].checked) {
            produtosorvete.recipiente = recipientes[i].value
        }
    }
    return
}

