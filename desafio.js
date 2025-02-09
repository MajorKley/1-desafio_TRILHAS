//1
// let nome = "Kleyciane";
// console.log(nome);

//2
// let idade = 25;
// let altura = 1.75;

// console.log(`idade: ${idade}, altura: ${altura}`);

//3
let preco = 50;
let desconto = 0.2;

let resultado = preco - (preco * 0.2);

console.log(`Resultado do preço com desconto: ${resultado}`);

//4
let temperatura = 30;

mensagemSaida = temperatura > 25 ? "Está calor!" : "Está fresco!";

console.log(mensagemSaida);

//5
// let idade = 25;

// mensagemIdade = idade >= 18 ? "Você é maior da idade!" : "Você é menor de idade!";

// console.log(mensagemIdade);

//6
let nota = 8;

if(nota >= 7){
    console.log("Aprovado!");
}else if(nota >=5){
    console.log("Recuperação!");
}else{
    console.log("Reprovado!");
}

//7 
let numero1 = 5, numero2 = 8;

let resultadoNumeros = numero1 == numero2 ? "Os números são iguais" : "Os números são diferentes";

console.log(resultadoNumeros);

//8
let nome = "Kleyciane";
let idade = 25;

console.log("Olá meu nomer é: " + nome + " e eu tenho " + idade + " anos");

//9
let numero = 1;
while(numero <= 10){
    console.log(numero);

    numero++;
} 

//10
    let numeroSecreto = 5;
    let chute;

    while (chute !== numeroSecreto){

       chute = parseInt(prompt("Digite um número até acertar!"));

    }   
    alert("Você acertou!");

//11
let i = 1;

while (i <= 10){
   tabuada = 7 * i;
   console.log(`7 x ${i} = ${tabuada}` );

    i++;
}

//12
for(let i = 0; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//13
function areaCirculo(raio){
    // pi = 3,14
    let area = 3.14 * (raio * raio);
    return area;
}

let resultadoArea = areaCirculo(5);
console.log("A área é: " + resultadoArea);


//14

//variáveis
let num01 = 5; //primeiro valor da soma
let num02 = 8; // segundo valor da soma
let soma; //variável que ira amarzenar o resultado

//calculo da soma
soma = num01 + num02;  

//saida de dados
console.log(soma); //imprime resultado do calculo no console


//15

//x = 10, y = 20
 function somaRefatorada( x, y){
    return x + y;
 }

let z = somaRefatorada(10, 20);
console.log("Resultado da soma:" + z);
