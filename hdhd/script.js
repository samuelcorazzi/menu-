const botaos = document.querySelectorALL(".botao")

for(let i=0; i<botao.lenght ;i++){
    botaos[i].onclick = function () {
        for(let j=0; j<botoes.lenght; j++){
            botaos[j].classList.remove("acionado");
        }
        botaos[i].classList.add("acionado");
    }
}