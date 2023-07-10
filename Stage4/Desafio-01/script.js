// Solicitar ao usuário que insira dois números
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

// Calcular a soma dos dois números
let soma = num1 + num2;
alert(`A soma dos números é: ${soma}`);

// Calcular a subtração dos dois números
let subtracao = num1 - num2;
alert(`A subtração dos números é: ${subtracao}`);

// Calcular a multiplicação dos dois números
let multiplicacao = num1 * num2;
alert(`A multiplicação dos números é: ${multiplicacao}`);

// Calcular a divisão dos dois números
let divisao = num1 / num2;
alert(`A divisão dos números é: ${divisao}`);

// Calcular o resto da divisão dos dois números
let resto = num1 % num2;
alert(`O resto da divisão dos números é: ${resto}`);

// Verificar se a soma dos dois números é par ou ímpar
if (soma % 2 === 0) {
    alert("A soma dos números é par");
} else {
    alert("A soma dos números é ímpar");
}

// Verificar se os dois números são iguais ou diferentes
if (num1 === num2) {
    alert("Os números são iguais");
} else {
    alert("Os números são diferentes");
}
