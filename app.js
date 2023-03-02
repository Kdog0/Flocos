
// const arraySabores = document.getElementsByName('slide')
// const recipientes = document.getElementsByName('recipiente')
// const selecionandoSaborMais = document.querySelector('.button-quantidade-sorvete-mais')
// const selecionandoSaborMenos = document.querySelector('.button-quantidade-sorvete-menos')
// const selecionandoRecipientes = document.getElementsByClassName('sorvete_recipientes')
// const corbeturas = document.getElementsByClassName('1')

// const elementoInsereNaTela = document.querySelector('.modal-compras')
// var sabor = [];



// //criando classe de objeto sorvete



// //Recebe o valor do sabor
// const trasformandoObjeto = () => {
//     for (i = 0; i <= arraySabores.length; i++) {
//         if (arraySabores[i].checked) {
//             valor = arraySabores[i].value
//             sabor.push(valor)
//             return

//         }
//     }
//     return sabor
// }

// let produtosorvete = {
//     sabor: "",
//     recipiente: "",
//     corbetura: "",
// }

// //Montando sorvete
// function adicionandoValor() {

//     if (sabor.length <= 3) {
//         trasformandoObjeto()
//         produtosorvete.sabor = sabor
//     }
//     return
// }



// function adcionarCorbertura(){
//     for(i=0; i<corbeturas.length; i++){
//         if(corbeturas[i].checked){
//             produtosorvete.corbetura = corbeturas[i].value
//         }
//     }return
// }

// function adcionaRecipiente() {
//     for (i = 0; i < recipientes.length; i++) {
//         if (recipientes[i].checked) {
//             produtosorvete.recipiente = recipientes[i].value
//         }
//     }
//     return
// }

// //quantidade removida
// function removendoValor() {
//     if (sabor.length > 0 && sabor.length <= 4) {
//         sabor.pop()
//     }
//     console.log(sorvete)
// }

// selecionandoSaborMais.addEventListener('click', adicionandoValor)
// selecionandoSaborMenos.addEventListener('click', removendoValor)
// botaoMonteSeuPedido.addEventListener('click', telaSorvete)
// botaoEscolhaPaleta.addEventListener('click', telaPaleta)

// function telaSorvete() {
//     desapareceTela.style.display = 'none'
//     apareceTela2.style.display = 'block'
// }

// function telaPaleta() {
//     desapareceTela.style.display = 'none'
//     apareceTela3.style.display = 'block'
// }

// //CÓDIGO SACOLA
// //Capturando Botão de Adicionar na sacola
// const btnAdicionaSacola = document.getElementById('btn-adiciona')

// function adicionaPedidoASacola(){
//     adicionandoValor()
//     adcionaRecipiente()
//     adcionarCorbertura()
    
    
//     //Transformando valores do array para String
//     let saboresNome = sabor.map( sabor => {
//         if(sabor == 1){
//            return sabor = 'Chocolate'
//         }else if(sabor == 2){
//             return sabor = 'Morango'
//         }else if(sabor == 3){
//             return sabor ='Flocos'
//         }else if(sabor == 4){
//             return sabor = 'Creme'
//         }
//     })
    
//     //É feito a contagem de cada sabor
//     const saboresNomesQuantidade = saboresNome.reduce((contador, sabor) => {
//         return contador[sabor] ? ++contador[sabor] : contador[sabor] = 1, contador 
//       }, {});

//     // const array = []
//     // let cont = 1
//     //   for(i=0; i<saboresNome.length; i++){
//     //     if(i < saboresNome.length - 1 && saboresNome[i] == saboresNome[i+1]){
//     //         cont++
//     //     }

//     //   }


//     // let saboresNomesQuantidade = saboresNome.reduce((contador,sabor)=>{
//     // contador[sabor] = (contador[sabor] || 0 || 1 || ++contador[sabor]);
//     // return contador;
//     // }, {});

//     //Aqui substituo o array do objeto pelo novo array com a contagem  
    
    
//     produtosorvete.sabor = JSON.stringify(saboresNomesQuantidade )
//     var total = produtosorvete.sabor.
    
//     elementoInsereNaTela.innerHTML = `
    
//     <p>${JSON.stringify(produtosorvete)}</p>
//     <p>R$Valor</p>
//     <div class="modal__preco"><p>${total}</p></div>
//     <button type="submit">Finalizar compra</button>
    

// `
//        console.log(produtosorvete.sabor)
// }


// //Adiconando informações ao Objeto produtoSorvete
// btnAdicionaSacola.addEventListener('click', adicionaPedidoASacola)

// //Adicionando Pedido na tela





  


