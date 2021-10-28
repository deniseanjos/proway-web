window.onload = function(){
    console.log("JS read carregado.")
    console.log(localStorage);

    carregaTabela();
}

// function salvar(){
    
//     let id = 1;
//     let local = "Teste";
//     let dataIda = "25-10-21";
//     let dataRetorno = "29-10-21";

    
//     //Dicionario - Chave:Valor
//     let viagem = {"id": id, "local": local, "dataIda": dataIda, "dataRetorno": dataRetorno};

//     let viagem2 = {"id": 2, "local": "Teste2", "dataIda": dataIda, "dataRetorno": dataRetorno};
    
//     let viagens = JSON.parse(localStorage.getItem("viagem"));
//     // let viagens = JSON.parse(localStorage.getItem("viagem2"));

//     viagens.push(viagem);
//     viagens.push(viagem2);

//     localStorage.setItem("viagem",JSON.stringify(viagens));

//     console.log(localStorage);

// }

function carregaTabela(){
    let tbody = document.getElementById("table-body");
    let viagens = JSON.parse(localStorage.getItem("viagem"));
    // tbody.innerHTML = "";
    viagens.forEach(v => {
        tbody.innerHTML += "<tr>"
                        +"<td>"+ v["id"] +"</td>"
                        +"<td>"+ v["local"] +"</td>"
                        +"<td>"+ v["dataIda"] +"</td>"
                        +"<td>"+ v["dataRetorno"] +"</td>"
                       +"</tr>";
    }); 
}

