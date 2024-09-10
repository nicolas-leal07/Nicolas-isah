const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a conscientização ambiental pode impactar a gestão de resíduos sólidos?",
        alternativas: [
            {
                texto: "Reduz a quantidade de resíduos gerados.",
                afirmacao: "A conscientização ambiental incentiva práticas como a redução, reutilização e reciclagem de materiais, diminuindo a quantidade de resíduos enviados para aterros."
            },
            {
                texto: "Melhora a separação e o tratamento dos resíduos.",
                afirmacao: "Conhecimento sobre a correta separação dos materiais recicláveis facilita o processo de reciclagem e reduz a contaminação dos resíduos."
            },
            {
                texto: "Promove a compostagem.",
                afirmacao: "A educação ambiental pode estimular a compostagem de resíduos orgânicos, o que reduz a carga sobre os sistemas de gestão de resíduos e melhora a qualidade do solo."
            }
        ]
    },
    {
        enunciado: "Qual é o papel da educação ambiental na conservação da água?",
        alternativas: [
            {
                texto: "Informa sobre práticas de economia de água.",
                afirmacao: "A educação ambiental ensina sobre métodos para reduzir o consumo de água, como o uso de dispositivos economizadores e técnicas de conservação."
            },
            {
                texto: "Aumenta a conscientização sobre a poluição hídrica.",
                afirmacao: "Educar sobre as fontes de poluição da água ajuda a prevenir a contaminação dos corpos d'água e a proteger a qualidade dos recursos hídricos."
            },
            {
                texto: "Promove a preservação de nascentes e corpos d'água.",
                afirmacao: "A educação ambiental incentiva a proteção das áreas que abastecem os sistemas hídricos, garantindo a disponibilidade de água limpa a longo prazo."
            }
        ]
    },
    {
        enunciado: "De que forma as práticas de consumo sustentável podem ajudar na preservação dos ecossistemas?",
        alternativas: [
            {
                texto: "Reduz a exploração excessiva de recursos naturais.",
                afirmacao: "O consumo sustentável encoraja o uso responsável dos recursos, ajudando a evitar a degradação dos ecossistemas naturais."
            },
            {
                texto: "Promove a proteção da biodiversidade.",
                afirmacao: "Ao optar por produtos sustentáveis e éticos, contribui-se para a conservação dos habitats naturais e a proteção das espécies ameaçadas."
            },
            {
                texto: "Estimula práticas de produção sustentável.",
                afirmacao: "A demanda por produtos sustentáveis incentiva as empresas a adotarem práticas que minimizam os impactos ambientais e promovem a recuperação dos ecossistemas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta();
