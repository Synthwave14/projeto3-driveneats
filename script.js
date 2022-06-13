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
    let endereco = prompt("Informe o seu endereço:");
    let nomePrato = document.querySelector(".selecionado1 .descricao h3").innerHTML;
    let precoPrato = document.querySelector(".selecionado1 .descricao h5").innerHTML;
    let nomeBebida = document.querySelector(".selecionado2 .descricao h3").innerHTML;
    let precoBebida = document.querySelector(".selecionado2 .descricao h5").innerHTML;
    let nomeSobremesa = document.querySelector(".selecionado3 .descricao h3").innerHTML;
    let precoSobremesa = document.querySelector(".selecionado3 .descricao h5").innerHTML;
    
    precoPrato = precoPrato.replace("R$ ", "");
    precoBebida = precoBebida.replace("R$ ", "");
    precoSobremesa = precoSobremesa.replace("R$ ", "");
    precoPrato = precoPrato.replace("," , ".");
    precoBebida = precoBebida.replace("," , ".");
    precoSobremesa = precoSobremesa.replace("," , ".");

    let precoTotal = parseFloat(precoPrato) + parseFloat(precoBebida) + parseFloat(precoSobremesa);
    precoTotal = precoTotal.toFixed(2);
    let Zapzap = "Olá, gostaria de fazer o pedido: \n - Prato: " + nomePrato + "\n - Bebida: " + nomeBebida + "\n - Sobremesa: " + nomeSobremesa + "\n Total: R$ " + precoTotal + "\n \n Nome: " + nome + "\n Endereço: " + endereco;
    console.log (Zapzap);

    const url = "https://wa.me/5521988088886?text=" + encodeURIComponent(Zapzap);     
    window.open(url, "_blank");
  }
}