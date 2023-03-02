const selecionandoMorangoMais = document.querySelector('.morango-menu_mais')
const selecionandoMorangoMenos = document.querySelector('.morango-menu_menos')
const contadorMorango = document.querySelector('.morango-contador')

const selecionandoChocolateMais = document.querySelector('.chocolate-menu_mais')
const selecionandoChocolateMenos = document.querySelector('.chocolate-menu_menos')
const contadorChocolate = document.querySelector('.chocolate-contador')

const selecionandoFlocosMais = document.querySelector('.flocos-menu_mais')
const selecionandoFlocosMenos = document.querySelector('.flocos-menu_menos')
const contadorFlocos = document.querySelector('.flocos-contador')

const selecionandoCremeMais = document.querySelector('.creme-menu_mais')
const selecionandoCremeMenos = document.querySelector('.creme-menu_menos')
const contadorCreme = document.querySelector('.creme-contador')

const recipientes = document.getElementsByName('recipiente')
const btnAdcSacola = document.getElementById('btn-adiciona-sacola')
const corbeturas = document.getElementsByClassName('1')

const telaPedido = document.querySelector('.modal-compras')

class Pedido{
    
}

const sorvete = new Pedido()

var totalBolas = 0

selecionandoMorangoMais.addEventListener('click',()=>{
    let quantidade = parseInt(contadorMorango.textContent)
    if(totalBolas<4 && quantidade <4){
        quantidade = parseInt(contadorMorango.textContent)
        quantidade +=1
        totalBolas += 1
        contadorMorango.textContent = quantidade
        sorvete.morango = quantidade
    }
    return totalBolas
})

selecionandoMorangoMenos.addEventListener('click',()=>{
    let quantidade = parseInt(contadorMorango.textContent)
    if(totalBolas>0){
        quantidade = parseInt(contadorMorango.textContent)
        quantidade -=1
        totalBolas -= 1
        contadorMorango.textContent = quantidade

    if(quantidade == 0){
        delete sorvete.morango

    }else{
        sorvete.morango = quantidade
    }
    
    }
})


selecionandoChocolateMais.addEventListener('click',()=>{
    let quantidade = parseInt(contadorChocolate.textContent)
    if(totalBolas<4 && quantidade <4){
        quantidade = parseInt(contadorChocolate.textContent)
        quantidade +=1
        totalBolas += 1
        contadorChocolate.textContent = quantidade
        sorvete.chocolate = quantidade
    }
    return totalBolas
    
})

selecionandoChocolateMenos.addEventListener('click',()=>{
    let quantidade = parseInt(contadorChocolate.textContent)
    if(totalBolas>0){
        quantidade = parseInt(contadorChocolate.textContent)
        quantidade -=1
        totalBolas -= 1
        contadorChocolate.textContent = quantidade
    if(quantidade == 0){
        delete sorvete.chocolate
        
    }else{
        sorvete.chocolate = quantidade
    }
    
    }})
    

selecionandoFlocosMais.addEventListener('click',()=>{
    let quantidade = parseInt(contadorFlocos.textContent)
    if(totalBolas<4 && quantidade <4){
        quantidade = parseInt(contadorFlocos.textContent)
        quantidade +=1
        totalBolas += 1
        contadorFlocos.textContent = quantidade
        sorvete.flocos = quantidade
    }
    return totalBolas
    
})

selecionandoFlocosMenos.addEventListener('click',()=>{
    let quantidade = parseInt(contadorFlocos.textContent)
    if(totalBolas>0){
        quantidade = parseInt(contadorFlocos.textContent)
        quantidade -=1
        totalBolas -= 1
        contadorFlocos.textContent = quantidade
    if(quantidade == 0){
        delete sorvete.flocos
        
    }else{
        sorvete.flocos = quantidade
    }
    }})

selecionandoCremeMais.addEventListener('click',()=>{
    let quantidade = parseInt(contadorCreme.textContent)
    if(totalBolas<4 && quantidade <4){
        quantidade = parseInt(contadorCreme.textContent)
        quantidade +=1
        totalBolas += 1
        contadorCreme.textContent = quantidade
        sorvete.creme = quantidade
    }
    return totalBolas
    
})

selecionandoCremeMenos.addEventListener('click',()=>{
    let quantidade = parseInt(contadorCreme.textContent)
    if(totalBolas>0){
        quantidade = parseInt(contadorCreme.textContent)
        quantidade -=1
        totalBolas -= 1
        contadorCreme.textContent = quantidade
    if(quantidade == 0){
        delete sorvete.creme
    }else{
        sorvete.creme = quantidade
    }
    
    }})

btnAdcSacola.addEventListener("click",()=>{
    adcionaRecipiente()
    adcionarCorbertura()
    console.log(sorvete)
    console.log(totalBolas)
    sacola = sorvete
    console.log(sacola)
    exibePedidoNaTela()
    
})

function adcionarCorbertura(){
    for(i=0; i<corbeturas.length; i++){
        if(corbeturas[i].checked){
            sorvete.corbetura = corbeturas[i].value
        }
    }return
}

function adcionaRecipiente(){
    for (i = 0; i < recipientes.length; i++) {
        if (recipientes[i].checked) {
            sorvete.recipiente = recipientes[i].value
        }
    }
    return
}

var sacola = []

var sacolaTexto 

function exibePedidoNaTela(){

    sacolaTexto = JSON.stringify(sorvete)
    sacolaTexto = sacolaTexto.replace("'","")
    sacolaTexto = sacolaTexto.replace(/["]/g, '');
    sacolaTexto = sacolaTexto.replace(/'/g, '');
    sacolaTexto = sacolaTexto.replace("{","")
    sacolaTexto = sacolaTexto.replace("}","")
    sacolaTexto = sacolaTexto.replace("[","")
    sacolaTexto = sacolaTexto.replace("]","")
    sacolaTexto = sacolaTexto.replace(",","")


    telaPedido.innerHTML = `<p>Bolas :${sacolaTexto}</p>`
    
}