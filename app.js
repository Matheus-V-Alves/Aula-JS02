



var resultado = document.getElementById('resultado')


    //-------------------------------------------------------------
    //  SOMA
function clicar(){
    ///entrada
    
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado')
    ///Processamento

    var soma = num1 + num2

    ///saida
    
    console.log(typeof soma)
    console.log(soma)
    resultado.innerText= soma
}   
    //---------------------------------------------------------------------
    //MULTIPLICAÇÃO

function clic(){
    ///entrada
    
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado')
    ///Processamento

    var multiplicacao = num1 * num2

    ///saida
    
    console.log(multiplicacao)
    resultado.innerText= multiplicacao  
}


  //---------------------------------------------------------------------
    //Divisão

    function cli(){
        ///entrada
        
        var num1 = parseFloat(document.getElementById('numero1').value);
        var num2 = parseFloat(document.getElementById('numero2').value);
        var resultado = document.getElementById('resultado')
        if (num2 === 0 ){
            resultado.innerText= "Erro: não é possivél dividir por 0";
        } else {
            resultado.innerText= num1/num2
        }
        ///Processamento
    
        var div = num1/num2
    
        ///saida
        
        console.log(div)
        resultado.innerText= div  
    }

    //---------------------------------------------------------------------
    //Subtração

    function cl(){
        ///entrada
        
        var num1 = parseFloat(document.getElementById('numero1').value);
        var num2 = parseFloat(document.getElementById('numero2').value);
        var resultado = document.getElementById('resultado')
        ///Processamento
    
        var menos = num1 - num2
    
        ///saida
        
        console.log(menos)
        resultado.innerText= menos  
    }