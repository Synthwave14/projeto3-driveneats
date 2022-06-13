let selecionados = 0

function escolhePrato (elemento) {
    const botaoClicado = document.querySelector(" .selecionado1");
    if (botaoClicado !== null) {
      botaoClicado.classList.remove('selecionado1');
      selecionados -= 1;
    }
    elemento.classList.add('selecionado1');
    selecionados += 1;
    confirmaPedido();
 }

function escolheBebida(elemento) {
  const botaoClicado = document.querySelector(" .selecionado2" );
  if (botaoClicado !== null) {
    botaoClicado.classList.remove('selecionado2');
    selecionados -= 1;
  }
  elemento.classList.add('selecionado2');
  selecionados += 1;
  confirmaPedido();
}

function escolheSobremesa(elemento) {
  const botaoClicado = document.querySelector(" .selecionado3");
  if (botaoClicado !== null) {
    botaoClicado.classList.remove('selecionado3');
    selecionados -= 1;
  }
  elemento.classList.add('selecionado3');
  selecionados += 1;
  confirmaPedido();
}

function confirmaPedido(){
  if (selecionados === 3){
    const pedidoConfirmado = document.querySelector(".confirma");
    pedidoConfirmado.innerHTML = "<p>Fechar pedido</p>";
    pedidoConfirmado.classList.add('confirma2');
  }
}

function enviarPedido(){
  if (selecionados === 3){
    let nome = prompt("Informe o seu nome:");
    let endereco = prompt("Informe o seu endereço:")
    let nomePrato = document.querySelector(".prato .selecionado1 .h3")
    let precoPrato = document.querySelector(".prato .selecionado1 .h5")
    let nomeBebida = document.querySelector(".bebida .selecionado2 .h3")
    let precoBebida = document.querySelector(".bebida .selecionado2 .h5")
    let nomeSobremesa = document.querySelector(".sobremesa .selecionado3 .h3")
    let precoSobremesa = document.querySelector(".sobremesa .selecionado3 .h5")

    precoPrato = precoPrato.replace("R$ ", "");
    precoBebida = precoBebida.replace("R$ ", "");
    precoSobremesa = precoSobremesa.replace("R$ ", "");
    precoPrato = precoPrato.replace("," , ".");
    precoBebida = precoBebida.replace("," , ".");
    precoSobremesa = precoSobremesa.replace("," , ".");

    let precoTotal = parseFloat(precoPrato) + parseFloat(precoBebida) + parseFloat(precoSobremesa);
    precoTotal = precoTotal.toFixed(2);
    let textoWhatsapp = "Olá, gostaria de fazer o pedido: \n - Prato: " + nomePrato + "\n - Bebida: " + nomeBebida + "\n - Sobremesa: " + nomeSobremesa + "\n Total: R$ " + precoTotal + "\n \n Nome: " + nome + "\n Endereço: " + endereco;
    console.log (textoWhatsapp);
  }
}