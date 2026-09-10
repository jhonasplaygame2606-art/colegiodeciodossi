/* ================================
   BOTÕES DE REAÇÃO
================================ */

const botoesReacao =
    document.querySelectorAll(".botao-reacao");


botoesReacao.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const contador =
            botao.querySelector("span");

        if (contador) {

            contador.textContent =
                Number(contador.textContent) + 1;

        }

    });

});


/* ================================
   VISUALIZADOR DE IMAGENS
================================ */

const imagens =
    document.querySelectorAll(
        ".imagem-expandir, .header-imagens img"
    );


const telaImagem =
    document.createElement("div");

telaImagem.className =
    "visualizador-imagem";


const imagemGrande =
    document.createElement("img");

imagemGrande.className =
    "imagem-grande";


const botaoFechar =
    document.createElement("button");

botaoFechar.className =
    "fechar-imagem";

botaoFechar.innerHTML =
    "✕";

botaoFechar.setAttribute(
    "aria-label",
    "Fechar imagem"
);

botaoFechar.setAttribute(
    "title",
    "Fechar"
);


telaImagem.appendChild(
    imagemGrande
);

telaImagem.appendChild(
    botaoFechar
);

document.body.appendChild(
    telaImagem
);


/* ================================
   ABRIR IMAGEM
================================ */

imagens.forEach(function (imagem) {

    imagem.addEventListener(
        "click",
        function () {

            imagemGrande.src =
                imagem.src;

            imagemGrande.alt =
                imagem.alt;

            telaImagem.classList.add(
                "ativo"
            );

            document.body.classList.add(
                "imagem-aberta"
            );

        }
    );

});


/* ================================
   FECHAR NO X
================================ */

botaoFechar.addEventListener(
    "click",
    function (evento) {

        evento.stopPropagation();

        fecharImagem();

    }
);


/* ================================
   FECHAR CLICANDO NO FUNDO
================================ */

telaImagem.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target === telaImagem
        ) {

            fecharImagem();

        }

    }
);


/* ================================
   FECHAR COM ESC
================================ */

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape"
        ) {

            fecharImagem();

        }

    }
);


/* ================================
   FECHAR IMAGEM
================================ */

function fecharImagem() {

    telaImagem.classList.remove(
        "ativo"
    );

    document.body.classList.remove(
        "imagem-aberta"
    );

    setTimeout(function () {

        if (
            !telaImagem.classList.contains(
                "ativo"
            )
        ) {

            imagemGrande.src = "";

        }

    }, 200);

}


/* ================================
   TEMA
================================ */

const btnTemaEscuro =
    document.querySelector(
        ".btn-tema-escuro"
    );


if (btnTemaEscuro) {

    btnTemaEscuro.addEventListener(
        "click",
        mudaTema
    );

}


/* ================================
   MUDAR TEMA
================================ */

function mudaTema() {

    document.body.classList.toggle(
        "tema-escuro"
    );

}