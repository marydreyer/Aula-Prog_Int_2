/*function inserir(produto){
    lista.push(produto) //BD
}

function listar(){
    return lista;
}

inserir({id:1, nome:"produt1", preco:10});

console.log(listar());
// inserir(produto), listar(), buscarPorId(id),atualizar(id, produto,preco)
*/

console.log("FOR")
for( let i=0; i<5; i++){
    console.log(i);
}

console.log("FOR IN 1")
let produto = {id: 1, nome: "prod1", preco:10}//descreve o objeto

for(let prop in produto){
    console.log(prop);
}

let listaNomeProduto = ['prod1','prod2','prod3']; //lista simples

console.log("FOR IN 2");
for(let ind in listaNomeProduto){
    console.log(ind);
}

console.log("FOR OF");

for(let dados of listaNomeProduto){
    console.log(dados);
}

console.log("FOREACH");
/*function imprimeData(value, index, array){
    console.log(index + "->" + value);
}*/

let imprimeData = (value, index, array) => // não é necessario chaves mas ele recomenda
    console.log(index + "->" + value);     // o sinal de flecha substitui a função 

listaNomeProduto.forEach(imprimeData);