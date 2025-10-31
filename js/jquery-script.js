/* Efeito de esconder formulário de cadastro */

// Garante que o script só rode depois que a página carregar
$(document).ready(function(){

    // Esconde o formulário de cadastro assim que a página carrega
    $("#form-cadastrar").hide();

    // Quando o botão "Não é cadastrado?" for clicado
    $("#botao-cadastrar").click(function(){
        
        // Alterna (mostra/esconde) o formulário com um efeito 'slide'
        $("#form-cadastrar").slideToggle("slow");

        // Opcional: esconde o próprio botão de "Cadastre-se"
        $(this).hide();
    });

});