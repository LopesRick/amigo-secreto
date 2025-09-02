let listaDeNomes = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo !== '') {
        listaDeNomes.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        document.getElementById('listaAmigos').innerText = listaDeNomes.join(', ');
    }
}

function sortearAmigo() {
    let sorteiaNomes = Math.floor(Math.random() * listaDeNomes.length);
    return listaDeNomes[sorteiaNomes];
}
