let saldo = 0;
let doceValor = 0;
let mensagem = "";
let isAdd = false;
let isBuy = false;
let troco = saldo - doceValor;

function selecionarDoce(numeroDoce) {
    mensagem = "";
    if (!isAdd) {
        switch (numeroDoce) {
            case 1:
                mensagem = " Doce A. Preço = 6,00R$";
                doceValor = 6.00;
                isAdd = true;
                break;
            case 2:
                mensagem = "Doce B. Preço = 7,00R$";
                doceValor = 7.00;
                isAdd = true;
                break;
            case 3:
                mensagem = "Doce C.Preço = 8,00R$";
                doceValor = 8.00;
                isAdd = true;
                break;
            default:
                mensagem = "Doce inválido";
        }
    } else {
        mensagem = "Doce já selecionado!";
    }

    document.querySelector('.display h2').innerText = mensagem;
}

function ValidarSaldo(par) {
    if (saldo >= doceValor && doceValor > 0) {
        mensagem = "Retire seu doce!";
        document.querySelector('.display h2').innerText = mensagem;
        isBuy = true;
    }
}

function enviarRequisicao() {
    // Endpoint da sua requisição
    const url = 'http://localhost:8080/pedidos';

    // Dados a serem enviados
    const data = { troco: troco }; // Include troco in the data to send

    // Configurações da requisição
    const options = {
        method: 'POST', // You might want to use 'POST' method to send data
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Convert data to JSON string before sending
    };

    // Envia a requisição usando fetch()
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar requisição');
            }
            return response.json();
        })
        .then(data => {
            console.log('Resposta do servidor:', data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

function sairDoces() {
    if (isBuy) {
        alert("Doces saindo...");

        mensagem = "Selecione um doce";

    } else {
        mensagem = "Selecione um doce";
    }

    document.querySelector('.display h2').innerText = mensagem;
}

function obterTroco() {
    if (isBuy) { // Verifica se um doce foi comprado antes de obter o troco
        troco = saldo - doceValor; // Calcula o troco
        alert("Troco: " + troco);
        enviarRequisicao();
        isAdd = false;
        isBuy = false;
        saldo = 0;
        doceValor = 0;
        troco = 0; // Reinicia o troco
    } else {
        alert("Selecione um doce!");
    }
}

function adicionarMoeda(valor) {
    if (isAdd) {
        saldo += valor;
        mensagem = "Saldo: " + saldo.toFixed(2); // Use toFixed to format currency
    } else {
        mensagem = "Doce não selecionado!";
    }
    document.querySelector('.display h2').innerText = mensagem;
}

function leverPull() {
    alert("Alavanca puxada!");
    // Not sure what this function is supposed to do, maybe you need to add some functionality here
}
