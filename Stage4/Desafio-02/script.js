// Função para calcular a média das notas de cada aluno
function mediaCalc(n1, n2) {
    return (n1 + n2) / 2;
}

let students = [
    {
        name: "Victor",
        n1: 8.5,
        n2: 7.0
    },
    {
        name: "Lucas",
        n1: 6.0,
        n2: 7.5
    },
    {
        name: "Pedro",
        n1: 7.8,
        n2: 6.5
    },
    {
        name: "Ana",
        n1: 3.0,
        n2: 8.0
    },
    {
        name: "Carlos",
        n1: 7.5,
        n2: 7.2
    },
    {
        name: "Sofia",
        n1: 8.2,
        n2: 7.8
    },
    {
        name: "Miguel",
        n1: 6.5,
        n2: 7.0
    }
];

// Verificar se cada aluno obteve sucesso ou não 
const mediaApproved = 7.0; // Média mínima

for (let student of students) {
    let media = mediaCalc(student.n1, student.n2);

    if (media >= mediaApproved) {
        alert(`A média de ${student.name} foi de ${media.toFixed(2)}:\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`);
    } else {
        alert(`A média de ${student.name} foi de ${media.toFixed(2)}:\nNão foi dessa vez, ${student.name}! Estude mais!`);
    }
}
