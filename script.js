document.getElementById('btnCadastro').addEventListener('click', function() {
    document.getElementById('cadastroSection').style.display = '';
    document.getElementById('consultaSection').style.display = 'none';

});

document.getElementById('btnConsultar').addEventListener('click', function() {
    document.getElementById('cadastroSection').style.display = 'none';
    document.getElementById('consultaSection').style.display = '';
});


function onlyNumber(id) {
    let input = document.getElementById(id)
    
    let value = input.value;

    value = value.replace(/\D/g, '');

    input.value = value;
}


document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que o formulário seja submetido
    //pegando cadastros digitados no formulário
    var nome = document.getElementById('nome').value.trim();
    var idade = document.getElementById('idade').value.trim();
    var tabela = document.getElementById('tabela');
    var msgcadastro = document.getElementById('mensagem-cadastro')

    var newRow = tabela.insertRow(tabela.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
        
    
    cell1.innerHTML = nome;
    cell2.innerHTML = idade;
    
    // Limpar os campos do formulário após cadastrar
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    
    msgcadastro.innerHTML = ` ${nome} cadastrado com sucesso`
});
