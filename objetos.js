const pessoa1 = {
    nome : 'João',
    idade : 15
};

function criaPessoa(nome, idade) {
    return {
        nome : nome,
        idade : idade
    };
}

const pessoa2 = criaPessoa('Maria', 55);
console.log(pessoa1);
console.log(pessoa2);

