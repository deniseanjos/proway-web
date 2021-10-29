window.onload = function(){
    console.log('JS create carregado.')
    console.log(localStorage);
    
    if(localStorage.length == 0){
        console.log('LocalStorage vazio. Criando um novo agora...')
        let viagem = [];
        localStorage.setItem("viagem", JSON.stringify(viagem));
    }
}

function salvar(event){
    // event.preventDefault();

    let id = document.getElementById('id');
    let local = document.getElementById('local');
    let dataIda = document.getElementById('dataIda');
    let dataRetorno = document.getElementById('dataRetorno');

    //Dicionario - Chave:Valor
    let viagem = {"id": id.value, "local": local.value, "dataIda": dataIda.value, "dataRetorno": dataRetorno.value};
    
    let viagens = JSON.parse(localStorage.getItem("viagem"));

    viagens.push(viagem);

    localStorage.setItem("viagem",JSON.stringify(viagens));

    console.log(localStorage);

    // carregaTabela();

}

// function carregaTabela(){
//     let tbody = document.getElementById("table-body");
//     let viagens = JSON.parse(localStorage.getItem("viagem"));
//     tbody.innerHTML = "";
//     viagens.forEach(v => {
//         tbody.innerHTML += "<tr>"
//                         +"<td>"+ v["id"] +"</td>"
//                         +"<td>"+ v["local"] +"</td>"
//                         +"<td>"+ v["dataIda"] +"</td>"
//                         +"<td>"+ v["dataRetorno"] +"</td>"
//                        +"</tr>";
//     }); 
// }
