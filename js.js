const form = document.getElementById("form-cadastro");
const tabelaContatos = document.getElementById("tabela-contatos");

// quando adicionamos o nome e numero se adicionarmos outro ele é substituido, com essa função ao invez de substituir ele adiciona + 1
let linhas = '';

form.addEventListener('submit', function(e) { //impede o envio padrao do formulario
    e.preventDefault();

    // obtem os valores dos campos nome e numero
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`
    linha += `</tr>`

    // continuação da função de adicionar outros nomes e numeros
    linhas += linha;

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;

    //reseta os campos apos adicionar 
    inputNome.value = '';
    inputNumero.value = '';

});

