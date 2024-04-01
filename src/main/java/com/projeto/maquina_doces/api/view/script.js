var saldo = 0;

function selecionarDoce(numeroDoce) {
    var mensagem = "";

    switch(numeroDoce) {
        case 1:
            mensagem = "Você selecionou o Doce 1";
            break;
        case 2:
            mensagem = "Você selecionou o Doce 2";
            break;
        case 3:
            mensagem = "Você selecionou o Doce 3";
            break;
        default:
            mensagem = "Doce inválido";
    }

    document.querySelector('.display h2').innerText = mensagem;
}
function enviarRequisicao() {
    // Endpoint da sua requisição
    const url = 'http://localhost:8080/pedidos';

    // Configurações da requisição
    const options = {
        method: 'GET', // Método da requisição (por exemplo, 'GET', 'POST', etc.)
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo sendo enviado (neste exemplo, JSON)
        }
    };

    // Envia a requisição usando fetch()
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar requisição');
            }
            return response.json(); // Parseia a resposta como JSON
        })
        .then(data => {
            console.log('Resposta do servidor:', data);
            // Faça algo com a resposta do servidor aqui
        })
        .catch(error => {
            console.error('Erro:', error);
            // Trate o erro aqui
        });
}



function sairDoces() {
    alert("Doces saindo...");
}

function obterTroco() {
    alert("Troco obtido!");
    enviarRequisicao();
}

function adicionarMoeda(valor) {
    saldo += valor;
    alert("Saldo atual: R$" + saldo.toFixed(2));
}

function leverPull() {
    alert("Alavanca puxada!");
}