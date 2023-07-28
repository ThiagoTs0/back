$(function(){
    $("#enviar").on("click",function(){
        var email = document.getElementById("email").value;
        var validacao = email.split("@");
        if(validacao[1] == "gmail.com"){
            //append server para adicionar elementor no fim do elemento selecionando;
            $(".erro").remove();
            //.remove() serve para remover um elemento.
            $(".acerto").remove();
            $("fieldset").append('<span class="acerto">Feito</span>');
            /*setTimeout = serve para da um tempo para a função acontecer */
            setTimeout(function(){
                $("form").css("display","none");
                $("main").html('<div class="concluido"><h3>Cadastro feito com sucesso</h3><p>agora o seu login esta salvo no nosso banco de dados</p></div>');
            },2000);
            
        }else{
            //append esta carregando o html no fim do codigo;,
            $(".erro").remove();
            //append serve para adicionar elemento no final
            //prepend serve para adicionar elemento no inicio
            //after server para adicionar no final
            //before server para adicionar antes
            $("fieldset").append('<span class="erro">Erro no cadastro</span>');
        }
    });
});