const telaPageOne = document.querySelector('.page1')
const telaPageSorvete = document.querySelector('.sorvete')
const botaoMonteSeuPedido = document.querySelector('.btn-monte-seu-pedido')
const telaSacola = document.querySelector('.pagFinalizarCompra')
const botaoMostraSacola = document.querySelector('.sacola-icon')

function exibeSacola(){
    telaSacola.style.display='block'
    document.getElementById('btn-fecha').style.display = 'block'
}

function fechaSacola(){
    
    document.getElementById('btn-fecha').style.display = 'none'
    telaSacola.style.display='none'
}

function exibeTelaSorvete() {
    telaPageOne.style.display = 'none'
    telaPageSorvete.style.display = 'block'
}

function exibeHome() {
    telaPageOne.style.display = 'block'
    telaPageSorvete.style.display = 'none'
}


botaoMonteSeuPedido.addEventListener("click",exibeTelaSorvete)
botaoMostraSacola.addEventListener('click',exibeSacola)
