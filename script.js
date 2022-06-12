function escolhePrato (elemento) {
    const botaoClicado = document.querySelector(" .selecionado1");
    if (botaoClicado !== null) {
      botaoClicado.classList.remove('selecionado1');
    }
    elemento.classList.add('selecionado1'); 
 }

function escolheBebida(elemento) {
  const botaoClicado = document.querySelector(" .selecionado2" );
  if (botaoClicado !== null) {
    botaoClicado.classList.remove('selecionado2');
  }
  elemento.classList.add('selecionado2');
}

function escolheSobremesa(elemento) {
  const botaoClicado = document.querySelector(" .selecionado3");
  if (botaoClicado !== null) {
    botaoClicado.classList.remove('selecionado3');
  }
  elemento.classList.add('selecionado3'); 
}