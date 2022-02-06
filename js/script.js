let numeroCartas = parseInt(prompt("Com quantas cartas deseja jogar? Números pares de 4 a 14 :D"));
cartasGif = [];
let cartasAbertas = [];
let cartaUm = null;
let CartaDois = null;
let armazenarPares = 0;
let qtdJogadas = 0;
let contador = document.querySelector(".numJogadas");

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
    for (i = 0; i < numeroCartas/2; i++) {
        cartasGif.push(`arquivos/${i}.gif`);       
    }
    for (i = 0; i < numeroCartas/2; i++) {
        cartasGif.push(`arquivos/${i}.gif`);        
    }

    cartasGif.sort(comparador);

    for (let x = 0; x < numeroCartas; x++) {
        
        const incluir = document.querySelector("main");
        incluir.innerHTML = incluir.innerHTML + `
    <div class="cartas selecionada" onclick="selecionarCarta(this,'${cartasGif[x]}')">
        
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
            qtdJogadas++;
            contador.innerHTML = `Jogadas: ${qtdJogadas}`;
        }
    }
    if (cartasAbertas.length == 2) {
        checarIgualdade();
    }
}

function checarIgualdade() {
    cartaUm = cartasAbertas[0];
    cartaDois = cartasAbertas[1];

    if (cartaUm !== cartaDois) {
        fecharCartas();
    } 

    else {        
        armazenarPares = armazenarPares + 2;
        if (armazenarPares < numeroCartas) {
            cartasAbertas = [];        
        } else if (armazenarPares == numeroCartas) {
            setTimeout(alertar, 1000);
        }
    }
    
}

function fecharCartas() {
    let fechar = document.querySelectorAll(".adicionado");
    fechar.classList.add("verso");
    //cartaUm.classList.add ("verso");
    //cartaDois.classList.add ("verso");
}

function alertar() {
    alert(`Fim do jogo! Você ganhou em ${qtdJogadas} jogadas.`);
}