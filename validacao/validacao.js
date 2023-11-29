const validacao = (dados) => {
    console.log(dados);
    let msg = "";
    if(!dados.descricao || dados.descricao == ""){
        msg += "Campo descricao é obrigatorio \n";
    }
    if(!dados.volume || dados.volume == ""){
        msg += "Campo volume é obrigatorio";
    }
    console.log(msg);
    if(msg){
        throw new Error(msg);
    }
}
module.exports = validacao;