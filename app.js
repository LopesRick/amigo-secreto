let listaDeNomes = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo === '') {
        alert("Digite um nome:");
        return;
    }
    if (listaDeNomes.includes(nomeAmigo)) {
        alert("O nome do amigo já foi adicionado!");
         document.getElementById('amigo').value = '';
         return;
    }
    listaDeNomes.push(nomeAmigo);
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerText = listaDeNomes.join(', ');
}

/*function verificarSorteio() {
    if (listaDeNomes.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }
}*/ //Revisar depois

function sortearAmigo() {
    let nomeSorteado = Math.floor(Math.random() * listaDeNomes.length);
    let amigoSorteado = listaDeNomes[nomeSorteado];
    document.getElementById('resultado').innerText = `O amigo sorteado foi: ${amigoSorteado}`;
}