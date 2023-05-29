const brasileirao = ['Santos', 'Corinthians', 'Palmeiras', 'São Paulo', 'Flamengo', 'Vasco']
Array.prototype.forEach2 = function(){
    for(let i = 0; i < this.length; i++){
        console.log(`${i+1} ${this[i]}`)
    }
}
brasileirao.forEach2()

