const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroudBody = estilosBody.backgroundColor;
console.log(backgroudBody);

for (let i in ps){
    ps[i].style.backgroundColor = backgroudBody;
    ps[i].style.color = '#FFFFFF';
}