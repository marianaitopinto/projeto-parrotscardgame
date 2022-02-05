let numeroCartas = parseInt(prompt("Com quantas cartas deseja jogar? Números pares de 4 a 14 :D"));
cartasGif = [];
let nomeCartas = ["par1", "par1", "par2", "par2", "par3", "par3", "par4", "par4", "par5", "par5", "par6", "par6", "par7", "par7"]
let cartasAbertas = [];

function qtdCartas() {
    while ((numeroCartas % 2 !== 0) || (numeroCartas < 4) || (numeroCartas > 14) || (numeroCartas === 0)) {
        numeroCartas = parseInt(prompt("Com quantas cartas deseja jogar? Números pares de 4 a 14 :D"));
    }
    adicionarCartas();
}

qtdCartas();

function comparador() {
    return Math.random() - 0.5;
}

function adicionarCartas() {
    for (i = 0; i < numeroCartas; i++) {
        cartasGif.push(`arquivos/${i}.gif`);
        cartasGif.sort(comparador);
    }

    for (let x = 0; x < numeroCartas; x++) {
        const incluir = document.querySelector("main");
        incluir.innerHTML = incluir.innerHTML + `
    <div class="cartas" onclick="selecionarCarta(this,'${nomeCartas[x]}')">
        
        <div class="verso face">
            <img src="${cartasGif[x]}" alt="GifsAleatorios">
        </div>
    </div>
    `
    }
}

function selecionarCarta(opcao, nomeExibicao) {
    let selecionado = opcao.querySelector(".face");

    if (cartasAbertas.length < 2) {
        if (selecionado.classList.contains("verso")) {

            selecionado.classList.remove("verso");
            cartasAbertas.push(nomeExibicao);

            
        }
    }
    if (cartasAbertas == 2) {
        checarIgualdade(opcao);
    }
}

function checarIgualdade() {
    if (cartasAbertas[0] !== cartasAbertas[1]) {
        setTimeout(fecharCartas, 1000);
    } 
    
}

function fecharCartas() {
    cartasAbertas[0].classList.add ("verso");
    cartasAbertas[1].classList.add ("verso");
}