async function enviaFormulario (){
    //recupera as informações do formulario e colocar em objetos json
    const alunoDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "cpf": document.querySelectorAll("input")[1].value,
        "telefone": document.querySelectorAll("input")[2].value
    }

 try{
   const respostaServidor = await fetch("http://localhost:3333/novo/aluno",{
        method: "POST",
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(alunoDTO)
    });

    if(respostaServidor.ok){
        throw new Error("Erro ao  enviar os dados para o servidor. Contate o adiministrador do sistema");
    }
    alert ("Aluno cadastrado com sucesso!");
} catch (Error){
    console.log(error);
    alert('Erro ao se comunicar com o servidor ${error}');
   }
}

async function recuperarListaAlunos(){
    try{
        const respostaServidor = await fetch ("http://localhost:3333/lista/alunos");
        
        if(!respostaServidor.ok) {
            throw new Error('Erro ao se comunicar com o servidor.');
        }

        const listaDeCarros =  await respostaServidor.json();

        console.log (listaDeAluno);
    }catch (error){
        console.log('Erro ao comunicar com o servidor');
        console.log(error);
    }
}

async function criarTabelaAlunos(alunos){

}