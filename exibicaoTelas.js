const telaPageOne = document.querySelector('.page1')
const telaPageSorvete = document.querySelector('.sorvete')
const telaPagePaletas = document.querySelector('.paletas')
const botaoMonteSeuPedido = document.querySelector('.btn-monte-seu-pedido')
const botaoEscolhaPaleta = document.querySelector('.btn-monte-seu-paleta')
const telaSacola = document.querySelector('.pagFinalizarCompra')
const botaoMostraSacola = document.querySelector('.sacola-icon')


botaoMonteSeuPedido.addEventListener("click",exibeTelaSorvete)
botaoEscolhaPaleta.addEventListener("click",exibeTelaPaletas)
botaoMostraSacola.addEventListener('click',exibeSacola)


function exibeSacola(){
    telaSacola.style.display='block'
}

function fechaSacola(){
    telaSacola.style.display='none'
}

function exibeTelaSorvete() {
    telaPageOne.style.display = 'none'
    telaPageSorvete.style.display = 'block'
}

function exibeTelaPaletas() {
    telaPageOne.style.display = 'none'
    telaPagePaletas.style.display = 'block'
}