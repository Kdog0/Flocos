
//cria obejto sorvete
const sorvete = []
const trasformandoObjeto = () => {    
   for(i=0;i<arraySabores.length;i++) {
    sorvete.push({sabor:arraySabores[i].value})    
   } 
}
trasformandoObjeto()

const montaSorvete = (sorvete) =>{
    
}



botaoMonteSeuPedido.addEventListener('click', telaSorvete)
botaoEscolhaPaleta.addEventListener('click', telaPaleta)

function telaSorvete() {
    const desapareceTela = document.querySelector('.page1')
    const apareceTela2 = document.querySelector('.sorvete')
    desapareceTela.style.display = 'none'
    apareceTela2.style.display = 'block'
}

function telaPaleta() {
    const desapareceTela = document.querySelector('.page1')
    const apareceTela3 = document.querySelector('.paletas')
    desapareceTela.style.display = 'none'
    apareceTela3.style.display = 'block'
}