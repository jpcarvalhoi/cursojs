const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa  = document.querySelector('.btn-tarefa');
const tarefas  = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let i of liTarefas) {
        let texto = i.innerText;
        texto = texto.replace(' Apagar', '');
        listaDeTarefas.push(texto);
    }
    console.log(listaDeTarefas);
    const tarefasJson = JSON.stringify(listaDeTarefas);
    console.log(tarefasJson);
    localStorage.setItem('tarefas', tarefasJson);
}

function carregaTarefas() {
    const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefas);

   for (let i of listaDeTarefas) {
       criaTarefa(i);
   }
}


function criaTarefa(tarefa) {
   const li = criaLi();
   li.innerText = tarefa;
   tarefas.appendChild(li);

   inputTarefa.value = "";
   inputTarefa.focus();

   criaBotaoApagar(li);
   salvarTarefas();
}

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});


btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

});

carregaTarefas();
