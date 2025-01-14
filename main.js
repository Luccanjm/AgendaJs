const form = document.querySelector('.form'); // Seleciona o formulário
let linhas = ''; 

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone'); 

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`; e
    linha += `<td>${inputTelefone.value}</td>`; 
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('table tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputTelefone.value = '';
    inputNome.focus(); 
});
