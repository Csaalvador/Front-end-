const form = document.querySelector('form');
const ul = document.querySelector('ul')


form.onsubmit = function(event){
    event.preventDefault()

    const input = form.querySelector('input')
    const value = input.value

    ////////////////////////// PRIMEIRA MANEIRA /////////////////////////////
    /*
    const li = document.createElement('li')
    li.setAttribute("class", "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")
    li.textContent = value

    const button = document.createElement('button')
    button.setAttribute("class", "text-red-700 delete")
    button.textContent = "x"

    li.appendChild(button)
    ul.appendChild(li)
    */

    /////////////////////////SEGUNDA MANEIRA///////////////////

    /*
    ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between"><span>${value}</span><button class="text-red-700 delete">ⅹ</button></li>`

    input.value = ''
*/

//////////////////////////////// MANEIRA MAIS SIMPLES////////////////////////:

if(value == "") return alert ("Não é possível listar um nome inexistente")

const li = ul.querySelector('li').cloneNode(true)
li.querySelector('span').textContent = value
ul.appendChild(li)

input.value = ""



}