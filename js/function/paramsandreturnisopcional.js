function area(base, altura){
    const Area = base * altura
    
    if(Area > 20){
        console.log(`Area acima do permitido meu xapa, ${Area}m²`)
        //If case return (`Area acima do permitido meu xapa, ${Area}m²`), "undefined no exist"
        
    }else{
        return Area
    }
}

console.log(area(5,5))