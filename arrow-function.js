function apresentar (nome){
    return `meu nome é  ${nome}`
}


const apresentarArrow = nome => `meu nome é ${nome}` 
const soma = (num1, num2) => `meu nome é ${num1 + num2}`

// arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) =>{
    if (num1 || num2 > 10){
        return "somente número de 1 a 9"
    }else{
        return num1 + num2
    }
}