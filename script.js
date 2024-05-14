document.getElementById('coracao').addEventListener('click', function() {
    var coracao = document.getElementById('coracao');
    coracao.classList.add('clicked'); 
    var mensagem = document.getElementById('mensagem');
    mensagem.textContent = "EU TE AMO!";
    var mensagem_2 = document.getElementById('mensagem_2');
    mensagem_2.innerHTML = '<a href="https://www.youtube.com/watch?v=AwA-rWdPi-g">Musica para minha princesa! Clique aqui.</a>';
    mensagem_2.style.display = 'block'; 
});
