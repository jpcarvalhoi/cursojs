const relogio = document.getElementById("contador");
function getHoraSegundos(segundos) {
    const d = new Date(segundos * 1000);
    return d.toLocaleTimeString('pt-BR', {
        hour12 : false,
        timeZone: 'GMT'
    });

}
let segundos = 0;
let timer ;

function inciar(){
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getHoraSegundos(segundos);
    }, 1000);
}

document.getElementById("iniciar").addEventListener("click", function(event) {
     inciar();
});

document.getElementById("pausar").addEventListener("click", function(event) {
    clearInterval(timer);
});

document.getElementById("zerar").addEventListener("click", function(event) {
    segundos = 0;
    relogio.innerHTML = getHoraSegundos(0);
});