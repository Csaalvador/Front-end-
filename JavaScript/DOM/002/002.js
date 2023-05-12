const body = document.querySelector('body');
const box1 = document.querySelector('.box');
const box2 = document.querySelector('.box2');

body.style.backgroundColor = 'aliceblue';
body.style.border = '1px solid red';

//Aqui eu peguei a função body,contei os elementos filhos dela,ou seja,tudo que tem no meu html,fiz a contagem e coloquei a quantidade equivalente aos filhos no array;
for(let i = 0; i < body.children.length; i++){
    body.children[i].style.marginLeft = '1.2rem'
}

//Aplicando a função e colorindo o elemento irmão/próximo do elemento selecionado
box1.nextElementSibling.style.backgroundColor = 'red'

////Aplicando a função e colorindo o elemento anterior do elemento selecionado
box2.previousElementSibling.style.backgroundColor = 'blue'

///////////////////////////////////////////////////////////////////////

//coloando um video
const iframe = document.createElement('iframe')
iframe.src = 'https://youtu.be/UftSB4DaRU4'

//prepend é antes,ou seja,aí estáantes do body
document.body.prepend(iframe)
iframe.style.marginLeft = "38%"

//box1.append(iframe) ==> adicionando após o box1
