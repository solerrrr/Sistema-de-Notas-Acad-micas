
console.log("Meu primeiro script foi executado!");
console.log("Projeto: Painel de Notas");
console.log("Calculando desempenho academico...");
console.log(10 + 5);


const nomeAluno = "Gustavo  Guanabara";
const curso = "Engenharia de Software"; 
const disciplina = "Programacao Web";

let nota1 = 8;
let nota2 = 7;

// alteracao de uma variavel let
nota2 = 8;

// 4 - var como contexto historico
var exemploAntigo = "Declaracao utilizada em codigos antigos";
console.log(exemploAntigo);

// 5 - Tipos de dados
const nomeDisciplina = "Banco de Dados"; 
const quantidadeDisciplinas = 3;         
const matriculaAtiva = true;             
const observacao = null;                 

console.log(nomeDisciplina);
console.log(quantidadeDisciplinas);
console.log(matriculaAtiva);
console.log(observacao);

// 6 - Operadores matematicos
const somaNotas = nota1 + nota2;
const diferencaNotas = nota1 - nota2;
const produtoNotas = nota1 * nota2;
const divisaoNotas = somaNotas / 2;
const media = divisaoNotas;

console.log("Soma:", somaNotas);
console.log("Diferenca:", diferencaNotas);
console.log("Multiplicacao:", produtoNotas);
console.log("Divisao e media:", media);

// Comparacoes (if's e elese's)
console.log("Media maior ou igual a 6:", media >= 6);
console.log("Media menor ou igual a 10:", media <= 10);
console.log("Notas iguais:", nota1 === nota2);
console.log("Notas diferentes:", nota1 !== nota2);

// 7 - Template literal
const mensagem = `O aluno ${nomeAluno}, do curso de ${curso},
obteve media ${media} em ${disciplina}.`;

console.log(mensagem);

// 8 - if e else
const notaMinima = 6;
let situacao = "Em analise";

if (media >= notaMinima) {
    situacao = "Aprovado";
    console.log("Aluno aprovado!");
} else {
    situacao = "Precisa recuperar";
    console.log("Aluno precisa recuperar.");
}

console.log("Situacao final:", situacao);

// 10 - integrador
const mediaFinal = (nota1 + nota2) / 2;
const pontosRestantes = 10 - mediaFinal;

console.log(`Resumo: ${disciplina} - media ${mediaFinal}.`);
console.log(`Pontos ate a nota 10: ${pontosRestantes}.`);

if (mediaFinal >= notaMinima) {
    console.log("Resultado: atingiu a media minima.");
} else {
    console.log("Resultado: precisa melhorar a nota.");
}
