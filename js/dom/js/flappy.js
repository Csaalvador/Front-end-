function novoElemento (tag, className) {
    const elem = document.createElement(tag)
    elem.classList = className
    return elem
}

function predio(reversa = false) {
    this.elemento = novoElemento('div', 'Predio')  
    
    const predio1 = novoElemento('div', 'predio-normal')
    const predio2 = novoElemento('div', 'predio-pc')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`

}

const b = new Barreira(true)
b.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(b.elemento)
