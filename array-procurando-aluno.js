const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9]

const listaDeAlunosEMedias = [alunos, medias]


function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){

        const indice = listaDeAlunosEMedias[0].indexOf(aluno)

        const mediasDoAluno = listaDeAlunosEMedias[1][indice]
    
        console.log(`${aluno} tem a média ${mediasDoAluno}.`)
}else{
    console.log("Aluno Não está cadastrado")
}
}

exibeNomeENota("Joao")




