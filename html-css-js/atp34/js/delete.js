window.onload = function(){
    console.log("JS delete carregado.")
    console.log(localStorage)

    if(localStorage.length == 0){
        alert("Não há dados para serem deletados.")
    }
}

function deletar(event){
    event.preventDefault();

    let idDigitado = document.getElementById('id');

    console.log("id digitado: " + id.value);

    let viagens = JSON.parse(localStorage.getItem("viagem"));

    viagens.forEach(e => {
        console.log("id cadastrado: " + e.id + " local: " + e.local);
        // let viagem = {"id": e.id, "local": e.local, "dataIda": e.dataIda, "dataRetorno": e.dataRetorno};
        if(idDigitado == e.id){
            console.log("Encontrado.");
            // localStorage.removeItem(viagens);
        } else {
            // localStorage.getItem(viagem);
        }
    });
}