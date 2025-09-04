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
    document.getElementById('listaAmigos').innerHTML = listaDeNomes.join('<br>');
}
function limparTela() {
    listaDeNomes = [];
    document.getElementById('listaAmigos').innerText = '';
    document.getElementById('resultado').innerText = '';
}

function sortearAmigo() {
    let nomeSorteado = Math.floor(Math.random() * listaDeNomes.length);
    if (nomeSorteado === undefined || listaDeNomes.length < 2) {
        document.getElementById('resultado').innerText = `Adicione pelo menos dois nomes para sortear.`;
        document.getElementById('resultado').style.color = 'red';
        return;
    } else{
        let amigoSorteado = listaDeNomes[nomeSorteado];
        document.getElementById('resultado').innerText = `O amigo sorteado foi: ${amigoSorteado}`;
        document.getElementById('resultado').style.color = 'green';
        return;
    }
}
let botaoEnter = document.getElementById('amigo');
botaoEnter.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});