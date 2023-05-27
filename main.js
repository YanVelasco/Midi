function tocaSom(idTagAudio){
    const element = document.querySelector(idTagAudio); 
    if (!null && element.localName === 'audio') {
        element.play();
    }else{
        alert('Elemento não encontrado')
    }
} 
// Criando um lista
const listaDeTeclas  = document.querySelectorAll('.tecla'); 

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumeto = tecla.classList[1];
    const idAudio = `#som_${instrumeto}`;// Template String

    // console.log(idAudio);
    tecla.onclick = function(){
        tocaSom(idAudio)
    };

    tecla.onKeydown = function(event) {
        if (event.code === 'Space' || event.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onKeyup = function() {
        tecla.classList.remove('ativa');
    }

}