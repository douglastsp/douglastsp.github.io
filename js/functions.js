//Nav sem atualizar com ajax
$(() => {
    //Chamando funções
    verificaCliqueMenu();

    //funções
    function verificaCliqueMenu() {
        $('nav a').click(function() {
            //Pegar o link da pag e colocar em uma variavel
            var href = $(this).attr('href');
            //fazendo a requisição ajax
            $.ajax({
                //O que eu quero que faça antes de realizar a requisição
                'beforeSend': function() {
                    console.log('Estamos chando o beforeSend...');
                },
                //Quando estourar o tempo limite da requisição
                'timeout': 10000,
                //Url da requisição
                'url': href,
                //Se acontecer erro
                'error': function (jqXHR,textStatus,errorThrown) {
                    //se houver erro de notfound
                    if (jqXHR.statusText == 'Not Found') {
                        $('#container').html('<h2>Lamento Página não existe!</h2>');
                    }
                },
                //completou a requisição
                'success': function (data) {
                    //Limpar o elemento
                    $('#container').html('');
                    //add o conteudo da pagina que foi requisitada dentro do elemento
                    $(data).appendTo('#container').fadeIn();//com o efeito de fadeIn porém a div tem que estar com display none
                    
                }
            });
            //Ao clicar em um link no menu não quero que faça nada
            return false;
        });
    }
});


