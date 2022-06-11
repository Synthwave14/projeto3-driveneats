function escolhePrato (prato) {
    const pratoClicado = document.querySelector(".selecionado");
    if (pratoClicado !== null) {
      pratoClicado.classList.remove("selecionado");
    }
    prato.classList.add("selecionado");
 }

 function escolheBebida(bebida) {
  const bebidaClicado = document.querySelector(".selecionado");
  if (bebidaClicado !== null) {
    bebidaClicado.classList.remove("selecionado");
  }
  bebida.classList.add("selecionado");
}

function escolheSobremesa(sobremesa) {
  const sobremesaClicado = document.querySelector(".selecionado");
  if (sobremesaClicado !== null) {
    sobremesaClicado.classList.remove("selecionado");
  }
  sobremesa.classList.add("selecionado");
}

function confirmaPedido(confirma)  {
  const confirma = document.querySelector(".selecionado2");
  if (confirma !== null) {
    confirma.classList.remove("selecionado2");
  }
  confirma.classList.add("selecionado2"); }