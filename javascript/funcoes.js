function OlaMundo(){
    alert("Entrei mundo");
}

function coletar(){
    var nome;
    var telefone;
    var data;
    var endereco;
    var situacao;
    var pessoa;
    var trabalhando;
    var resultado;

    nome=document.getElementById("tNome").value;
    telefone = document.getElementById("tTelefone").value;
    data = document.getElementById("tDtNascimento").value;
    endereco = document.getElementById("tEndereco").value;
    situacao = document.querySelector('input[name="situacao"]:checked').value;
    //pessoa = document.getelementsByName("profissao").value;
    //trabalhando = document.getElementsbyName("trabalho").value;
    
    resultado = "Dados Cadastrais\nNome: " + nome + 
                "\nTelefone: "             + telefone +
                "\nData de Nascimento: "     + data +
               "\nEndereço: "             + endereco +
                "\nSituação Civil: "         + situacao +
               "\nSituacao Juridica: "      + pessoa +
               "\nTrabalhando?: "           + trabalhando;

    document.getElementById("resultado").value = resultado;

}//fim do metodo

function somar(){
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("tPrimeiro").value);
    num2 = parseInt(document.getElementById("tSegundo").value);

    
    resultado = num1 + num2;
    alert(resultado);
}//fim do metodo

function subtrair(){
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("tPrimeiro").value);
    num2 = parseInt(document.getElementById("tSegundo").value);
    
    resultado = num1 - num2;
    alert(resultado);
}//fim do metodo

function dividir(){
    var num1;
    var num2;
    var resultado;
    
    num1 = parseInt(document.getElementById("tPrimeiro").value);
    num2 = parseInt(document.getElementById("tSegundo").value);

    resultado = num1 / num2;
    alert(resultado);
}//fim do metodo

function multiplicar(){
    var num1;
    var num2;
    var resultado;
    
    num1 = parseInt(document.getElementById("tPrimeiro").value);
    num2 = parseInt(document.getElementById("tSegundo").value);

    resultado = num1 * num2;
    alert(resultado);
}//fim do metodo