function atualizarResultado(resultado) {
    const elemento = document.getElementById('resultado');
    elemento.textContent = resultado;
    ajustarFonte(resultado);
}
function ajustarFonte(texto) {
    const elemento = document.getElementById('resultado');
    const valor = String(texto ?? '');
    let tamanho = 40;

    if (valor.length > 10) {
        tamanho = 30;
    }

    if (valor.length > 14) {
        tamanho = 22;
    }

    if (valor.length > 18) {
        tamanho = 18;
    }

    elemento.style.fontSize = tamanho + 'px';
}
function adicionarNumero(num) {
    const atual = document.getElementById('resultado').textContent;
    const novoValor = atual === '0' || atual === 'Erro' ? num : atual + num;

    atualizarResultado(novoValor);
}
function adicionarOperador(operador) {
    const atual = document.getElementById('resultado').textContent;
    const novoValor = atual + operador;

    atualizarResultado(novoValor);
}
function calcular() {
    try {
        const expressao = document.getElementById('resultado').textContent;
        const result = eval(expressao);

        atualizarResultado(result);
    } catch (error) {
        atualizarResultado('Erro');
    }
}
function clean() {
    atualizarResultado('0');
}
function apagar() {
    const atual = document.getElementById('resultado').textContent;
    const novoValor = atual.length > 1 ? atual.slice(0, -1) : '0';

    atualizarResultado(novoValor);
}
window.addEventListener('DOMContentLoaded', () => {
    atualizarResultado('0');
});