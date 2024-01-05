"use strict";

// Salvando os elementos que serão trabalhados em variaveis
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelector(".show-modal"); // Query selector só retorna o primeiro match. Se houver mais que um, não retorna o resto
const btnsOpenModal = document.querySelectorAll(".show-modal"); // Precisa usar o All no fim
// console.log(btnsOpenModal); // Funciona como uma array

// Uma função que será repetida nos eventos
function openModal() {
  // console.log("Botão pressionado");

  // Removendo a classe de escondido dos textos e overlay, já que eles estão escondidos
  modal.classList.remove("hidden"); // Remove classes. Se for mais de um elemento, use ,
  overlay.classList.remove("hidden");
  // Olhando no codigo da pagina, o hidden some no codigo HTML
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  // Por ser uma array, pode ser passado em um for e tem acesso a length
  btnsOpenModal[i].addEventListener("click", openModal); // Para cada botão, check por clicks
}

// Ao se clicar no botão X (.close-modal), ele esconde o texto e overlay de novo
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// A função pode ser criada antes e chamada aqui, mas sem (), já que ele só deve ser executada ao acontecer o evento esperado, senão, iria rodar ao ler a linha
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// classList.add e remove são extremamente uteis para modificar sites

// Já que document encompassa a pagina inteira, esse tipo de eventListener está ativo o tempo todo na pagina, só esperando
document.addEventListener("keydown", function (event) {
  // Por agora, o evento acontece em qualquer botão
  // console.log("Uma tecla foi apertada");

  // Ao se passar um argumento a função, ela guarda um objeto com informações relacionadas ao evento esperado, como qual tecla foi apertada.
  // console.log(event.key); // lendo a informação do objeto

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    // .contains checa se o elemento existe para verificar se o modal não possui a classe hidden, ou seja, a janela está visivel
    // console.log("Esc foi apertado");
    
    closeModal(); // aqui tem (), já que será executada se chegar aqui
  }
});

/// Keydown, ao se apertar. Keyup, ao se soltar. Keypress, ao se segurar.
