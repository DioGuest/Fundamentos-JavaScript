//parametros de funcção

function soma (nume1, nume2){
    return nume1 + nume2
}


console.log(soma(2, 2));
console.log(soma(4, 5));
console.log(soma(8, 2));


//Parâmetros x argumentos


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Pedro', 25));



function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 8)))