// quando clicar no botao do personagem marcar como botao selecionado
const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll(".perssonagem");
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
          desselecionarBotao();
          desselecionarPersonagem();
          botao.classList.add('selecionado');          
          personagens[indice].classList.add("selecionado");
    })
});
function desselecionarBotao() {
    const personagemSelecionado = document.querySelector(".perssonagem.selecionado");
          personagemSelecionado.classList.remove("selecionado");
}
function desselecionarPersonagem() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
          botaoselecionado.classList.remove("selecionado");
}


