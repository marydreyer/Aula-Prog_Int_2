//objetos
class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
}

let prod = new Produto();
prod.nome = "produto1";
prod.preco = 39;
console.log(prod);

let prod2 = new Produto("produto2", 50);
console.log(prod2);

let prod3 = { 
    nome:"produto3", 
    preco: 10
}; //formato json, não traz a definição de produto
console.log(prod3);

let prod4 = new Object();
prod4.nome = "produto4";
prod4.preco = 15;
console.log(prod4);

let arrayProd1 = [];
arrayProd1.push(prod);
arrayProd1.push(prod2);
console.log(arrayProd1);

let arrayProd2 = [ //objeto estatico
    { 
        nome:"produto3", 
        preco: 20
    },
    { 
        nome:"produto4", 
        preco: 10
    },
    { 
        nome:"produto5", 
        preco: 70
    }
];
console.log(arrayProd2);
