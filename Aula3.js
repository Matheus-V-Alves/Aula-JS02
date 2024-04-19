//------------------ calculando os livros ---------------

    var resultado = document.getElementById ('result');

function calcular(){

    //Entrada 

    var livros = parseInt(document.getElementById('numbooks').value);
    var resultado = document.getElementById ('result');


    //process
    if (livros > 0 && livros < 7 ){
        var preco = livros * 22
        resultado.innerText= `O preço é ${preco}`;
    }
    else{
        var preco = livros * 15
    }

    //saida

}   resultado.innerText= `O preço é ${preco}`;


//20*---------------------------------------

let groceryItem = '';

switch (groceryItem{

    case "junior":
        console.log('junior ganha R$3000');
        break;

    case "pleno":
        console.log('junior ganha R$6000');
        break;
        
    case "Senior":
        console.log('junior ganha R$10000');
        break;
        
    case "TechLead":
        console.log('junior ganha R$13000');
        break;

    case "Diretor":
        console.log('junior ganha R$15000');
        break;

    })