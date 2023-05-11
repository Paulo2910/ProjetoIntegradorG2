window.addEventListener('load', function(){

    const btnDadosPessoais = document.querySelector('#btn-dados');
    const btnEndereco = document.querySelector('#btn-endereco');
    const btnPedidos = document.querySelector('#btn-pedidos');
   

    let dadosPessoais = document.querySelector('#dadosPessoais');
    let endereco = document.querySelector('#endereco');
    let pedidos = document.querySelector('#pedidos');
   

    function sumir (){
        dadosPessoais.style.display = 'none';
        endereco.style.display ='none';
        pedidos.style.display = 'none';
        
    }


    btnEndereco.addEventListener('click', function(){
        sumir();
        endereco.style.display ='block';
    })

    btnDadosPessoais.addEventListener('click', function(){
        sumir();
        dadosPessoais.style.display ='flex';
    })

    btnPedidos.addEventListener('click', function(){
        sumir();
        pedidos.style.display = 'block'
    })


})