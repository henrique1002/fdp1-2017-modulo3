//Classe
Autenticacao = function(){}

Autenticacao.prototype.validar = function() {
    elementoUsuario = document.getElementById("txtUsuario");
    textoDigitadoUsuario = elementoUsuario.value;
    
    elementoSenha = document.getElementById("txtSenha");
    textoDigitadoSenha = elementoSenha.value;
    
    if (textoDigitadoUsuario == "" || textoDigitadoSenha == "") {
        window.alert('Os campos Usu�rio e Senha devem ser digitados!');
        return false;
    }
    
    return true;
}

aut = new Autenticacao();