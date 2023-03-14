window.addEventListener('load', function(){

    const btnDadosPessoais = document.querySelector('#btn-dados');
    const btnEndereco = document.querySelector('#btn-endereco');
    const btnPedidos = document.querySelector('#btn-pedidos');
    const btnCartoes = document.querySelector('#btn-cartoes');

    let dadosPessoais = document.querySelector('#dadosPessoais');
    let endereco = document.querySelector('#endereco');
    let pedidos = document.querySelector('#pedidos');
    let cartoes = document.querySelector('#cartoes');

    function sumir (){
        dadosPessoais.style.display = 'none';
        endereco.style.display ='none';
        pedidos.style.display = 'none';
        cartoes.style.display ='none';
    }


    btnEndereco.addEventListener('click', function(){
        sumir();
        endereco.style.display ='block';
    })

    btnDadosPessoais.addEventListener('click', function(){
        sumir();
        dadosPessoais.style.display ='block';
    })

    btnPedidos.addEventListener('click', function(){
        sumir();
        pedidos.style.display = 'block'
    })

    btnCartoes.addEventListener('click', function(){
        sumir();
        cartoes.style.display = 'block'
    })


})