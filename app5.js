let listaProd = [];

function inserir(produto){
    listaProd.push(produto);
};

function atualizar(id, produto){

};

function deletar(id){

};

function buscarPorId(id){
    for(let prod of listaProd){
        if(prod.id == id){
            return prod
        }
    }

};

function listar(){
    return listaProd;
};

let produto = {id:1, nome: "prod1", preco:10}
console.log(listaProd);
console.log(buscarPorId(1));
